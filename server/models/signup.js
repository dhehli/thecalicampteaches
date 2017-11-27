import express from 'express';
import config from 'config';
import rethinkdbdash from 'rethinkdbdash';
import bcrypt from 'bcrypt';

const router = express.Router();
const r = rethinkdbdash(config.get('rethinkdb'));

const table = 'user';

//Check email adress is
function checkDuplicatedEmail(email){
  return new Promise((resolve, reject) => {
   r.table(table)
   .filter({ email: email })
   .count()
   .run()
   .then(response => response ? reject([{param: 'email', msg: 'Duplicated email'}]) : resolve())
   .error(err => reject(err));
  })
}

//Encrypt Password to Store in Database
function encryptPassword(password){
  return bcrypt.hash(password, 10).then(hash => hash)
}

//Post to insert User
router.post('/signup', (req, res) => {

  req.checkBody("salutation", "No salutation.").notEmpty().trim();
  req.checkBody("firstname", "No firstname.").notEmpty().trim();
  req.checkBody("lastname", "No lastname.").notEmpty().trim();
  req.checkBody("email", "No email.").isEmail().trim();
  req.checkBody("password", "No password.").notEmpty().trim();

  const errors = req.validationErrors();

  if(errors){
    return res.json({errors: errors});
  }

  const {salutation, firstname, lastname, email, password} = req.body;


  Promise.all([
    checkDuplicatedEmail(email),
    encryptPassword(password)
  ])
  .then(values => {
    const cryptedPassword = values[1];

    const data = {
      salutation,
      firstname,
      lastname,
      email,
      password: cryptedPassword,
      created: new Date(),
      onlineSate: true
    }

    r.table(table)
    .insert(data)
    .run()
    .then(response =>	{
      return res.status(201).json(response)
    })
    .error(err => res.status(500).send({error: err}))
  })
  .catch(err => res.send({errors: err}))
})

export default router;
