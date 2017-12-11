import express from 'express';
import _ from 'underscore';
import bcrypt from 'bcrypt';
import r from '../connection/connection'

const router = express.Router();

const table = 'user';
const tableForgotpassword = 'forgotpassword'

//Check if User Exists
function checkIfHashExists(hash){
  return new Promise((resolve, reject) => {
   r.table(tableForgotpassword)
   .filter({ hash, state: 0 })
   .run()
   .then(response => !_.isEmpty(response) ? resolve(response) : reject(false))
   .error(err => reject(false));
  })
}

//Encrypt Password to Store in Database
function encryptPassword(password){
  return bcrypt.hash(password, 10).then(hash => hash)
}

function findUserByEmail(email){
  return new Promise((resolve, reject) => {
   r.table(table)
   .filter({ email })
   .count()
   .run()
   .then(response => response ? resolve(true) : reject(false))
   .error(err => reject(false));
  })
}


router.get('/resetpassword/:hash', (req, res) => {

  const hash = req.params.hash;

  checkIfHashExists(hash)
  .then(success => success ? res.json({showForm: true}) : res.json({showForm: false}))
  .catch(err => res.send({showForm: false}))
})

//Login User
router.post('/resetpassword/:hash', (req, res) => {

  const hash = req.params.hash;

  req.checkBody("password", "No password.").notEmpty().trim();

  const errors = req.validationErrors();

  if(errors){
    return res.json({errors: errors});
  }

  const { password } = req.body;

  Promise.all([
    checkIfHashExists(hash),
    encryptPassword(password)
  ])
  .then(values => {
    const email = values[0][0].email;
    const cryptedPassword = values[1];

    r.table(tableForgotpassword)
    .filter({ hash })
    .update({ state: 1})
    .run()
    .then(response => {
      r.table(table)
      .filter({ email })
      .update({ password: cryptedPassword})
      .run()
      .then(response => {
        return res.json({ updated: true})
      })
    })
    .error(err => res.send({error: err}))
  })
  .catch(err => res.send({errors: err}))

})

export default router;
