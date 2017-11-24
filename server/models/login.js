import express from 'express';
import config from 'config';
import _ from 'underscore';
import rethinkdbdash from 'rethinkdbdash';
import bcrypt from 'bcrypt';

const router = express.Router();
const r = rethinkdbdash(config.get('rethinkdb'));

const table = 'user';

router.post('/login', (req, res) => {

  req.checkBody("email", "No email.").isEmail().trim();
  req.checkBody("password", "No password.").notEmpty().trim();

  const errors = req.validationErrors();

  if(errors){
    return res.status(400).json({errors: errors});
  }

  const {email, password} = req.body;

  r.table(table)
  .filter({email: email})
  .run()
  .then(response =>	{
    if(_.isEmpty(response)){
      return res.status(401).send({error: 'User not found'})
    }

    bcrypt.compare(password, response[0].password)
    .then(cryptResponse => {
        console.log("cres", cryptResponse)
        if(cryptResponse === false){
            return res.status(401).send({error: 'Password wrong'})
        }


        const userId = response[0].id;
        req.session.userId = userId;

        return res.status(200).json("Logged in")
    })
    .catch(err => console.log(err));

  })
  .error(err => res.status(500).send({error: err}))

})

router.get('/logout', (req, res) => {
  console.log("logout")
  if (req.session) {

    req.session.destroy(err => {
      if(err) {
        return next(err);
      }
      console.log("logout")
      return res.redirect('/');
    });
  }
})

export default router;
