 import express from 'express';
import config from 'config';
import _ from 'underscore';
import r from '../connection/connection'
import fs from 'fs';
import upload from '../helpers/multer'
import cloudinaryUpload from '../helpers/cloudinary'

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
router.get(`/${table}/:uid`, (req, res) => {
  const uid = req.params.uid;

  r.table(table)
  .get(uid)
  .run()
  .then(response =>	res.json(response))
  .error(err => res.status(500).send({error: err}))
})

//Post
router.post(`/${table}`, upload.single('image'), (req, res) => {

  req.checkBody("firstname", "No firstname.").notEmpty().trim();
  req.checkBody("lastname", "No lastname.").notEmpty().trim();
  req.checkBody("quote", "No quote.").notEmpty().trim();
  req.checkBody("onlineState", "No online state.").isBoolean();

  let errors = req.validationErrors() || [];

  if(!req.file){
    errors.push({param: 'file', msg: 'No File'})
  }

  if(!_.isEmpty(errors)){
    req.file && req.file.path && fs.unlink(req.file.path, e => console.error(e))
    return res.json({errors: errors});
  }

  const {firstname, lastname, quote, onlineState} = req.body;

  cloudinaryUpload(req.file.path)
  .then(image => {

    const data = {
      firstname,
      lastname,
      quote,
      image,
      created: new Date(),
      onlineState
    }

    r.table(table)
    .insert(data)
    .run()
    .then(response =>	{
      fs.unlink(req.file.path, e => e ? console.error(e) : '')
      return res.status(201).json(response)
    })
  })
  .catch(err => res.status(500).send({error: err}))
})

//Put
router.put(`/${table}/:uid`, upload.single('image'), (req, res) => {
  const uid = req.params.uid;

  req.checkBody("firstname", "No firstname.").notEmpty().trim();
  req.checkBody("lastname", "No lastname.").notEmpty().trim();
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

  if(req.file){
    cloudinaryUpload(req.file.path)
    .then(image => {
      data.image = image;
      fs.unlink(req.file.path, e => e ? console.error(e) : '')
      insert();
    })
  }else{
    insert();
  }

  function insert(){
    return r.table(table)
    .get(uid)
    .update(data)
    .run()
    .then(response =>	res.status(200).json(response))
    .error(err => res.status(500).send({error: err}))
  }
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
