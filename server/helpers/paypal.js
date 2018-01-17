import paypal from 'paypal-rest-sdk';
import config from 'config';

paypal.configure(config.get("paypal"));

function createPaypalPayment(totalAmount, discount) {

  const paymentData = {
    intent: "order",
    payer: {
      payment_method: "paypal"
    },
    redirect_urls: {
      return_url: "http://localhost:3000/api/psuccess",
      cancel_url: "http://localhost:4200/member/paypalerror"
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "order",
              price: totalAmount,
              currency: "USD",
              quantity: 1
            }
          ]
        },
        amount: {
          currency: "USD",
          total: totalAmount
        },
        description: "This is the payment description."
      }
    ]
  };

  return new Promise((resolve, reject) => {
    paypal.payment.create(JSON.stringify(paymentData), (error, payment) => {
      if (error) {
        reject(error);
      } else {
        console.log("sucess res paypal", payment);
        resolve(payment)
      }
    })
  })
}

export default createPaypalPayment;
