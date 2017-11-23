import express from 'express';
import config from 'config';
import _ from 'underscore';
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
   .then(response => response ? reject("email taken") : resolve())
   .error(err => reject(err));
  })
}

//Encrypt Password to Store in Database
function encryptPassword(password){
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10)
    .then(hash => resolve(hash))
  })
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
    return res.status(400).json({errors: errors});
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
  .catch(err => res.status(500).send({error: err}))
})

export default router;
