const express = require('express');
const router = express.Router();
const config  = require('config');
const _ = require('underscore');
var r = require('rethinkdbdash')(config.get('rethinkdb'));

const table = 'heroes';

// Get All
router.get('/heroesApi', (req, res) => {
  r.table(table)
  .run()
  .then(response =>	res.json(response))
  .error(err => res.status(500).send({error: err}))
})

//Get by Uid
router.get('/heroesApi/:uid', (req, res) => {
  const uid = req.params.uid;

  r.table(table)
  .get(uid)
  .run()
  .then(response =>	res.json(response))
  .error(err => res.status(500).send({error: err}))
})

//Post
router.post('/heroesApi', (req, res) => {
  if(_.isEmpty(req.body)){
    return res.status(400).send({error: 'No Request Body'})
  }
  if(!req.body.name){
    return res.status(400).send({error: 'No Name provided'})
  }
  const data = {
    name: req.body.name.trim()
  }
  r.table(table)
  .insert(data)
  .run()
  .then(response =>	res.status(201).json(response))
  .error(err => res.status(500).send({error: err}))
})

//Put
router.put('/heroesApi/:uid', (req, res) => {
  const uid = req.params.uid;

  if(_.isEmpty(req.body)){
    return res.status(400).send({error: 'No Request Body'})
  }
  if(!req.body.name){
    return res.status(400).send({error: 'No Name provided'})
  }
  const data = {
    name: req.body.name.trim()
  }
  r.table(table)
  .get(uid)
  .update(data)
  .run()
  .then(response =>	res.status(200).json(response))
  .error(err => res.status(500).send({error: err}))
})

//Delete
router.delete('/heroesApi/:uid', (req, res) => {
  const uid = req.params.uid;

  r.table(table)
  .get(uid)
  .delete()
  .run()
  .then(response =>	res.status(200).json(response))
  .error(err => res.status(500).send({error: err}))
})

module.exports = router;
