import express from 'express';
import config from 'config';
import r from '../connection/connection'
import moment from 'moment-es6';

const router = express.Router();

const table = 'voucher';
const url = 'voucherMember';

// Get All
router.post(`/${url}`, (req, res) => {
  req.checkBody("code", "No code.").notEmpty().trim();

  const errors = req.validationErrors();

  if (errors) {
    return res.json({errors: errors});
  }

  const { code } = req.body;

  r.table(table)
  .filter({code})
  .run()
  .then(response => {
    if(response && response.length){
      return res.json({ isValidCode: true})
    }
    return res.json({ isValidCode: false})
  })
  .error(err => res.json({ isValidCode: false}));

})

export default router;
