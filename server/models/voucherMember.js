import express from 'express';
import config from 'config';
import r from '../connection/connection'
import moment from 'moment-es6';

const router = express.Router();

const table = 'voucher';
const url = 'vouchermember';

// Get All
router.post(`/${url}`, (req, res) => {
  req.checkBody("code", "No code.").notEmpty().trim();

  const errors = req.validationErrors();

  if (errors) {
    return res.json({ isValidCode: false});
  }

  const { code } = req.body;

  r.table(table)
  .filter({code})
  .run()
  .then(response => {
    if(response && response.length){
      console.log(response);
      return res.json({
        isValidCode: true,
        voucherAmount: response[0].amount
      })
    }
    return res.json({ isValidCode: false})
  })
  .error(err => res.json({ isValidCode: false}));

})

export default router;
