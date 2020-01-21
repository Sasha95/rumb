const stripe = require('stripe')('sk_test_wGGY16CVl3OfHDYzOSIyNC1t008gWbxXvT')

async function postSession(body){
  const rez = await stripe.checkout.sessions.create({
    payment_intent_data: {
      setup_future_usage: 'off_session',
    },
    // customer: 'cus_GZ208uzKeM6gCN',
    payment_method_types: ['card'],
    line_items: [{
      name: body.title,
      description: `${body.phoneNumber} (${body.firstName} ${body.lastName})`,
      amount: body.amount*100,
      currency: body.currency,
      quantity: 1,
    }],
    success_url: `http://localhost:3000/rumb/payment${body.id.toString()}/pay/success`,
    cancel_url: `http://localhost:3000/rumb/payment${body.id.toString()}/pay/fail`,
  });
  return rez;
}
module.exports = {postSession}
