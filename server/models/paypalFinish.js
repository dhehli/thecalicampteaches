import express from 'express';
import paypal from 'paypal-rest-sdk';
import config from 'config';

paypal.configure(config.get("paypal"));

const router = express.Router();

// Get All
router.get(`/psuccess`, (req, res) => {
  console.log("psuccess")

  var paymentId = req.query.paymentId;
  var payerId = { payer_id: req.query.PayerID };

  console.log(paymentId, payerId);

  paypal.payment.execute(paymentId, payerId, function(error, payment){
    if(error){
      console.log("err0", error);
    } else {
      console.log("payment",payment);
      if (payment.state == 'approved'){
        console.log('payment completed successfully');
        return res.status(201)
      } else {
        console.log('payment not successful');
        return res.status(500)
      }
    }
  });

})


export default router;
