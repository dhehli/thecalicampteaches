import express from 'express';
import r from '../connection/connection';
import paypal from 'paypal-rest-sdk';
import config from 'config';

const router = express.Router();
paypal.configure(config.get("paypal"));

router.get('/paypal', (req, res) => {

  var create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:4200/member/paypalsuccess",
      "cancel_url": "http://localhost:4200/member/paypalerror"
    },
    "transactions": [
      {
        "item_list": {
          "items": [
            {
              "name": "item",
              "sku": "item",
              "price": "1.00",
              "currency": "USD",
              "quantity": 1
            }
          ]
        },
        "amount": {
          "currency": "USD",
          "total": "1.00"
        },
        "description": "This is the payment description."
      }
    ]
  };

  paypal.payment.create(create_payment_json, function(error, payment) {
    if (error) {
      throw error;
    } else {
      console.log("Create Payment Response");
      console.log(payment);
    }
  });
})

export default router;
