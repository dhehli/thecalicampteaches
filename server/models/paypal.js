import express from 'express';
import r from '../connection/connection';
import paypal from 'paypal-rest-sdk'

const router = express.Router();


//Check if User Exists
function checkIfHashExists(hash){
  return new Promise((resolve, reject) => {
   r.table(tableForgotpassword)
   .filter({ hash, state: 0 })
   .run()
   .then(response => !_.isEmpty(response) ? resolve(response) : reject(false))
   .error(err => reject(false));
  })
}

router.get('/paypal', (req, res) => {

  console.log("paypal");
})



export default router;
