import express from 'express';
import _ from 'underscore';
import config from 'config';
import crypto from 'crypto'
import r from '../connection/connection'
let mailgun = require('mailgun-js')(config.get('mailgun'));

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

//Login User
router.post('/forgotpassword', (req, res) => {

  req.checkBody("email", "No email.").isEmail().trim();

  const errors = req.validationErrors();

  if(errors){
    return res.json({errors: errors});
  }

  const {email} = req.body;


  let userId;

  checkIfEmailExists(email)
  .then(user => {
    userId = user[0].id;
  })
  .then(isPasswordValid => {

    const hash = crypto.randomBytes(20).toString('hex');

    const data = {
      from: config.get('defaultMail'),
      to: email,
      subject: 'Forgot password',
      html: `
        <p>
          You used the forgot password function on thecalicampteaches.<br>
          Pleae use the following link to reset your password
        <p>
        <p>
          <a href="http://localhost:4200/resetpassword/${hash}">Reset password</a>
        </p>
      `
    };

    mailgun.messages().send(data, (err, body) => {
      if (err) {
        return res.json({errors: [{param: 'mail', msg: 'Mailing failure'}]});
      }

      r.table('forgotpassword')
      .insert({
        email,
        hash,
        created: new Date(),
        state: 0
      })
      .run()
      .then(response => res.send({mailSent: true}))
      .error(err => err);
    });

  })
  .catch(err => res.send({errors: err}))

})

export default router;
