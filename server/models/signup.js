import express from 'express';
import config from 'config';
import _ from 'underscore';
import rethinkdbdash from 'rethinkdbdash';
import bcrypt from 'bcrypt';

const router = express.Router();
const r = rethinkdbdash(config.get('rethinkdb'));

const table = 'user';

router.post('/signup', (req, res) => {
  if(_.isEmpty(req.body)){
    return res.status(400).send({error: 'No Request Body'})
  }
  if(!req.body.salutation){
    return res.status(400).send({error: 'No Salutation provided'})
  }
  if(!req.body.firstname){
    return res.status(400).send({error: 'No Firstname provided'})
  }
  if(!req.body.lastname){
    return res.status(400).send({error: 'No Lastname provided'})
  }
  if(!req.body.email){
    return res.status(400).send({error: 'No email provided'})
  }
  if(!req.body.password){
    return res.status(400).send({error: 'No password provided'})
  }

  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const data = {
      salutation: req.body.salutation.trim(),
      firstname: req.body.firstname.trim(),
      lastname: req.body.lastname.trim(),
      email: req.body.email.trim(),
      password: hash,
      created: new Date(),
      onlineSate: true
    }

    r.table(table)
    .insert(data)
    .run()
    .then(response =>	{
      

      res.status(201).json(response)
    })
    .error(err => res.status(500).send({error: err}))
  });
})

export default router;
