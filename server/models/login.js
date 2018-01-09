import express from 'express';
import _ from 'underscore';
import bcrypt from 'bcryptjs';
import r from '../connection/connection'

const router = express.Router();

const table = 'user';

//Check if User Exists
function checkIfEmailExists(email){
  return new Promise((resolve, reject) => {
   r.table(table)
   .filter({ email: email })
   .run()
   .then(response => _.isEmpty(response) ? reject([{param: 'email', msg: 'User not found'}]) : resolve(response))
   .error(err => reject(err));
  })
}

//Compare Passwords
function checkPassword(password, hash){
   return bcrypt.compare(password, hash).then(res => res);
}

//Login User
router.post('/login', (req, res) => {

  req.checkBody("email", "No email.").isEmail().trim();
  req.checkBody("password", "No password.").notEmpty().trim();

  const errors = req.validationErrors();

  if(errors){
    return res.json({errors: errors});
  }

  const {email, password} = req.body;


  let userId;
  let isAdmin;

  checkIfEmailExists(email)
  .then(user => {
    userId = user[0].id;
    isAdmin = user[0].admin;

    return checkPassword(password, user[0].password)
  })
  .then(isPasswordValid => {
    if(!isPasswordValid){
      return res.json({errors: [{param: 'password', msg: 'Password wrong'}]});
    }

    req.session.userId = userId;

    if(isAdmin){
      req.session.admin = isAdmin;
    }

    r.table('user')
    .filter({ id: userId, admin: true })
    .count()
    .run()
    .then(response => response ? res.json({loggedIn: true, admin: true}) : res.json({loggedIn: true}))
    .error(err => res.send({errors: err}))
  })
  .catch(err => res.send({errors: err}))

})

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if(err) {
        return next(err);
      }
      res.send({logout: true})
    });
  }
})

export default router;
