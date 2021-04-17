const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  
 // const stripe = require('stripe')('pk_live_7zmhmyiDD2vvqiwkaf2vInei00HV3h1fqx');
//
 // const invoice = await stripe.invoices.retrieve(
 //   'in_1IYivVAkRq3nayIgU7fGfOAd'
 // );
//
//console.log(JSON.stringify(invoice));

});
//app.use((_, res, next) => {
//  res.header('Access-Control-Allow-Origin', '*')
//  res.header(
//    'Access-Control-Allow-Headers',
//    'Origin, X-Requested-With, Content-Type, Accept'
//  )
//  next()
//})

app.listen(process.env.PORT || 8080);