import express from 'express';
import config from 'config';
import _ from 'underscore';
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
 const userId = req.session.userId;

 r.table(table)
 .run()
 .then(response => res.json(response))
 .error(err => res.status(500).send({error: err}))
})

//Get by Uid
router.put(`/${url}/:uid`, (req, res) => {
 const uid = req.params.uid;
 const userId = req.session.userId;

 r.table(table)
 .filter({ id: uid, userId})
 .update({hasUnreadComment: false})
 .run()
 .then(response => res.status(200).json(response))
 .error(err => res.status(500).send({error: err}))
})

//Delete
router.delete(`/${url}/:uid`, (req, res) => {
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
