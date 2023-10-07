import bodyParser from 'body-parser';
const stripe = require('stripe')(process.env.STRIPE_KEY);

const router = require('express').Router();

router.post('/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
    const event = JSON.parse(req.body.toString());
    switch (event.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = event.data.object;
          console.log('Usuário pagou com sucesso: ', paymentIntent);
          break;
      }

    res.json({ received: true });
});

module.exports = router;