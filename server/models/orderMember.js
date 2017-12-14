import express from 'express';
import config from 'config';
import _ from 'underscore';
import r from '../connection/connection'
import fs from 'fs';
import upload from '../helpers/multer'
import cloudinaryUpload from '../helpers/cloudinary'

const router = express.Router();

const table = 'order';

// Get All
router.get(`/${table}`, (req, res) => {
 const userId = req.session.userId;

 r.table(table)
 .orderBy('created')
 .filter({ userId })
 .run()
 .then(response =>	res.json(response))
 .error(err => res.status(500).send({error: err}))
})

//Get by Uid
router.get(`/${table}/:uid`, (req, res) => {
 const uid = req.params.uid;
 const userId = req.session.userId;

 r.table(table)
 .filter({ id: uid, userId})
 .run()
 .then(response => res.json(response))
 .error(err => res.status(500).send({error: err}))
})

//Get by Uid
router.put(`/${table}/:uid`, (req, res) => {
 const uid = req.params.uid;
 const userId = req.session.userId;

 r.table(table)
 .filter({ id: uid, userId})
 .update({hasUnreadComment: false})
 .run()
 .then(response => res.status(200).json(response))
 .error(err => res.status(500).send({error: err}))
})

//Post
router.post(`/${table}`, upload.single('video'), (req, res) => {
 const userId = req.session.userId;

 req.checkBody("title", "No title.").notEmpty().trim();
 req.checkBody("userComment", "No Comment.").notEmpty().trim();

 let errors = req.validationErrors() || [];

 if(!req.file){
   errors.push({param: 'video', msg: 'No Video'})
 }

 if(!_.isEmpty(errors)){
   req.file && req.file.path && fs.unlink(req.file.path, e => console.error(e))
   return res.json({errors: errors});
 }

 const {title, userComment} = req.body;

 cloudinaryUpload(req.file.path, 'video')
 .then(video => {

   const data = {
     title,
     userComment,
     video,
     userId,
     orderState: "new",
     created: new Date()
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

//Delete
router.delete(`/${table}/:uid`, (req, res) => {
 const uid = req.params.uid;
 const userId = req.session.userId;

 r.table(table)
 .filter({ id: uid, userId})
 .delete()
 .run()
 .then(response => res.status(200).json(response))
 .error(err => res.status(500).send({error: err}))
})

export default router;
