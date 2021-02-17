const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51ILUJEI95v2mAhMonOZ2hR8nnIHfKjMbkLB4yxjYfPPjlBTS2746UlyzSww7uafigrVU0R0aYnkCYTynhvMo5i7100KQWXcSTp'
);
// api

// app config
const app = express();
// middlewars
app.use(cors({ origin: true }));
app.use(express.json());

// api router
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payment/create', async (request, response) => {
  const total = request.query.total;
  console.log('payment recevied >>', total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: 'usd',
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// listen command
exports.api = functions.https.onRequest(app);

// this is api endpoint:  http://localhost:5001/clone-3ff85/us-central1/api
