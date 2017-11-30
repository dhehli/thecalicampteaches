import express from 'express';
import config from 'config';
import _ from 'underscore';
import r from '../connection/connection'

console.log("in testi")

const router = express.Router();

const table = 'testimonial';

// Get All
router.get(`/${table}`, (req, res) => {
  r.table(table)
  .run()
  .then(response =>	res.json(response))
  .error(err => res.status(500).send({error: err}))
})

//Get by Uid
router.get(`${table}/:uid`, (req, res) => {
  const uid = req.params.uid;

  r.table(table)
  .get(uid)
  .run()
  .then(response =>	res.json(response))
  .error(err => res.status(500).send({error: err}))
})

//Post
router.post(`/${table}`, (req, res) => {
  req.checkBody("firstname", "No firstname.").notEmpty().trim();
  req.checkBody("lastname", "No lastname.").notEmpty().trim();
  // TODO: add image
  req.checkBody("quote", "No quote.").notEmpty().trim();

  const errors = req.validationErrors();

  if(errors){
    return res.json({errors: errors});
  }

  const {firstname, lastname, quote} = req.body;

  const data = {
    firstname,
    lastname,
    quote,
    created: new Date(),
    onlineSate: true
  }

  r.table(table)
  .insert(data)
  .run()
  .then(response =>	res.status(201).json(response))
  .error(err => res.status(500).send({error: err}))
})

//Put
router.put(`/${table}/:uid`, (req, res) => {
  const uid = req.params.uid;

  req.checkBody("firstname", "No firstname.").notEmpty().trim();
  req.checkBody("lastname", "No lastname.").notEmpty().trim();
  // TODO: add image
  req.checkBody("quote", "No quote.").notEmpty().trim();
  req.checkBody("onlineState", "No online state.").isBoolean();

  const errors = req.validationErrors();

  if(errors){
    return res.json({errors: errors});
  }

  const {firstname, lastname, quote, onlineState} = req.body;

  const data = {
    firstname,
    lastname,
    quote,
    onlineState
  }

  r.table(table)
  .get(uid)
  .update(data)
  .run()
  .then(response =>	res.status(200).json(response))
  .error(err => res.status(500).send({error: err}))
})

//Delete
router.delete(`/${table}/:uid`, (req, res) => {
  const uid = req.params.uid;

  r.table(table)
  .get(uid)
  .delete()
  .run()
  .then(response =>	res.status(200).json(response))
  .error(err => res.status(500).send({error: err}))
})

export default router;
