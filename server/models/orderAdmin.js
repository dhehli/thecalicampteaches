import express from 'express';
import config from 'config';
import _ from 'underscore';
import uuid from 'uid-safe'
import r from '../connection/connection'

const router = express.Router();

const table = 'order';
const url = 'orderadmin';

// Get All
router.get(`/${url}`, (req, res) => {
 const userId = req.session.userId;

 r.table(table)
 .orderBy('created')
 .run()
 .then(response =>	res.json(response))
 .error(err => res.status(500).send({error: err}))
})

//Get by Uid
router.get(`/${url}/:uid`, (req, res) => {
 const uid = req.params.uid;

 r.table(table)
 .filter({ id: uid})
 .run()
 .then(response => res.json(response))
 .error(err => res.status(500).send({error: err}))
})

//Get by Uid
router.put(`/${url}/:uid`, (req, res) => {
 const uid = req.params.uid;
 const adminId = req.session.userId;

 req.checkBody("comment", "No comment.").notEmpty().trim();

 const errors = req.validationErrors();

 if(errors){
   return res.json({errors: errors});
 }

 const {comment} = req.body;

 const data = {
   id: uuid.sync(18),
   comment,
   adminId,
   created: new Date()
 }

 r.table(table)
 .filter({ id: uid})
 .update({
   orderState: "progress",
   hasUnreadComment: true,
   comments: r.row('comments').append(data)})
 .run()
 .then(response => res.status(200).json(response))
 .error(err => res.status(500).send({error: err}))
})

//Delete Order
router.delete(`/${url}/:uid`, (req, res) => {
 const uid = req.params.uid;

 r.table(table)
 .filter({ id: uid })
 .delete()
 .run()
 .then(response => res.status(200).json(response))
 .error(err => res.status(500).send({error: err}))
})

//Delete Comment
router.delete(`/${url}/:orderId/:commentId`, (req, res) => {
 const orderId = req.params.orderId;
 const commentId = req.params.commentId;

 r.table(table)
 .filter({ id: orderId })
 .update(row => {
   return {
    'comments': row('comments').filter(comment => comment('id').ne(commentId))
   }
 })
 .run()
 .then(response => res.status(200).json(response))
 .error(err => res.status(500).send({error: err}))
})

export default router;
