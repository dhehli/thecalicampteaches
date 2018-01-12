import express from 'express';
import config from 'config';
import r from '../connection/connection'
import moment from 'moment-es6';

const router = express.Router();

const table = 'voucher';

// Get All
router.get(`/${table}`, (req, res) => {
  r.table(table)
  .run()
  .then(response => res.json(response))
  .error(err => res.status(500).send({error: err}))
})

//Get by Uid
router.get(`/${table}/:uid`, (req, res) => {
  const uid = req.params.uid;

  r.table(table)
  .get(uid)
  .run()
  .then(response => res.json(response))
  .error(err => res.status(500).send({error: err}))
})

//Post
router.post(`/${table}`, (req, res) => {

  req.checkBody("description", "No description.").notEmpty().trim();
  req.checkBody("fromDate", "No from date.").notEmpty().trim();
  req.checkBody("toDate", "No to date.").notEmpty().trim();
  req.checkBody("code", "No code.").notEmpty().trim();
  req.checkBody("amount", "No amount.").notEmpty().trim();
  req.checkBody("onlineState", "No online state.").isBoolean();

  let errors = req.validationErrors();

  if (errors) {
    return res.json({errors: errors});
  }

  const {description,fromDate,toDate,code,amount,onlineState} = req.body;

  const data = {
    description,
    fromDate: moment(fromDate).toISOString(),
    toDate: moment(toDate).toISOString(),
    code,
    amount: Number(amount),
    onlineState
  }

  r.table(table)
  .insert(data)
  .run()
  .then(response => res.status(201).json(response))
  .error(err => res.status(500).send({error: err}))
})

//Put
router.put(`/${table}/:uid`, (req, res) => {
  const uid = req.params.uid;

  req.checkBody("description", "No description.").notEmpty().trim();
  req.checkBody("fromDate", "No from date.").notEmpty().trim();
  req.checkBody("toDate", "No to date.").notEmpty().trim();
  req.checkBody("code", "No code.").notEmpty().trim();
  req.checkBody("amount", "No amount.").notEmpty().trim();
  req.checkBody("onlineState", "No online state.").isBoolean();

  const errors = req.validationErrors();

  if (errors) {
    return res.json({errors: errors});
  }

  const {description,fromDate,toDate,code,amount,onlineState} = req.body;

  const data = {
    description,
    fromDate: moment(fromDate).toISOString(),
    toDate: moment(toDate).toISOString(),
    code,
    amount: Number(amount),
    onlineState
  }

  r.table(table)
  .get(uid)
  .update(data)
  .run()
  .then(response => res.status(200).json(response))
  .error(err => res.status(500).send({error: err}))
})

//Delete
router.delete(`/${table}/:uid`, (req, res) => {
  const uid = req.params.uid;

  r.table(table)
  .get(uid)
  .delete()
  .run()
  .then(response => res.status(200).json(response))
  .error(err => res.status(500).send({error: err}))
})

export default router;
