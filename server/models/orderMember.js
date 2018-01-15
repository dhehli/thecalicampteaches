import express from 'express';
import config from 'config';
import _ from 'underscore';
import r from '../connection/connection'
import fs from 'fs';
import upload from '../helpers/multer'
import cloudinaryUpload from '../helpers/cloudinary'
let mailgun = require('mailgun-js')(config.get('mailgun'));

const router = express.Router();

const table = 'order';

//Find User By ID
function findUserById(userId){
  return r.table('user')
  .filter({ id: userId })
  .run()
  .then(response => response)
}

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
 .then(response => {

   r.table(table)
   .filter({ id: uid, userId})
   .update({hasUnreadComment: false})
   .run()
   .then()
   .error(err => res.status(500).send({error: err}))

   return res.json(response);
 })
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

 const {title, userComment, code} = req.body;

 cloudinaryUpload(req.file.path, 'video')
 .then(video => {

   const data = {
     title,
     userComment,
     comments: [],
     video,
     userId,
     orderState: "new",
     created: new Date()
   }

   r.table(table)
   .insert(data)
   .run()
   .then(response => {

    findUserById(userId)
    .then(user => {
      const {email, firstname, lastname} = user[0];

      const data = {
        from: email,
        to: config.get('defaultMail'),
        subject: `Your recevied a new order from ${firstname} ${lastname}`,
        html: `
          <p>
            Order title is ${title}<br>
            Pleae login with your admin account to see the new order.
          <p>
        `
      };

      mailgun.messages().send(data, (err, body) => {
        if (err) {
          return res.json({errors: [{param: 'mail', msg: 'Mailing failure'}]});
        }

       fs.unlink(req.file.path, e => e ? console.error(e) : '')
       return res.status(201).json(response)
     })
    })
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
