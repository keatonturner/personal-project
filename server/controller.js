const config = require('./config')
const stripe = require('stripe')(config.secret_key);

module.exports = {
    allResorts: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_resorts().then(resorts => {
            dbInstance.get_orderid(req.session.user.id)
            .then(orders => {
                if(orders[0]){
                    req.session.user.ordersid = orders[0].id
                    res.status(200).send({orders, resorts})
                } else {
                    dbInstance.create_cart(req.session.user.id)
                    .then(orders => {
                        req.session.user.ordersid = orders[0].id
                        res.status(200).send({orders, resorts})
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).send({errorMessage: 'not cool man!'})
            console.log(err)
        })
    },

    specificResort: (req, res) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.get_resort(params.id).then(resorts => res.status(200).send(resorts))
        .catch(err => {
            res.status(500).send({errorMessage: 'not cool man'})
            console.log(err)
        })
    },

    createCart: (req, res) => {
const dbInstance = req.app.get('db');
dbInstance.join_all([req.session.user.ordersid]).then(res => res.status(200).send(res))
.catch(err => {
    res.status(500).send({errorMessage: 'not cool man'})
    console.log(err)
})
    },
    addToCart: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.add_to_cart([req.session.user.ordersid, req.body.id, req.body.pass, req.body.price, req.body.quantity])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'not cool man'})
            console.log(err)
        })
    },
    cartResorts: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.join_all([req.session.user.ordersid])
        .then(cart => res.status(200).send(cart))
        .catch(err => {
            res.status(500).send({errorMessage: 'not cool man'})
            console.log(err)
        })
    },
    deleteFromCart: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_from_cart([req.params.id, req.session.user.ordersid])
        .then(() => {
            dbInstance.join_all([req.session.user.ordersid])
            .then(resort => res.status(200).send(resort))
        })
        .catch(err => {
            res.status(500).send({errorMessage: 'not cool man'})
            console.log(err)
        })
    },
    quantity: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.quantity([req.body.quantity, req.body.id, req.session.user.ordersid])
        .then(() => {
            dbInstance.join_all([req.session.user.ordersid])
            .then(resort => res.status(200).send(resort))
        }).catch(err => {
            res.status(500).send({errorMessage: 'not cool man'})
            console.log(err)
        })
    },
    payment: (req, res, next) => {
        const amountArray = req.body.amount.toString().split('');
        const pennies = [];
        for (var i = 0; i < amountArray.length; i++) {
          if(amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") {
              pennies.push(amountArray[i + 1]);
            } else {
              pennies.push("0");
            }
            if (typeof amountArray[i + 2] === "string") {
              pennies.push(amountArray[i + 2]);
            } else {
              pennies.push("0");
            }
              break;
          } else {
              pennies.push(amountArray[i])
          }
        }
        const convertedAmt = parseInt(pennies.join(''));
      
        const charge = stripe.charges.create({
        amount: convertedAmt, // amount in cents, again
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test charge from react app'
      }, function(err, charge) {
          if (err) return res.sendStatus(500)
          return res.sendStatus(200);
      }) 
    },
    clearCart: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.clear_cart([req.session.user.id, req.session.user.ordersid])
        .then(() => {
            dbInstance.create_cart(req.session.user.id)
            .then(orders => {
                req.session.user.ordersid = orders[0].id
                res.status(200).send(orders)})
        }).catch(err => {
            res.status(500).send({errorMessage: 'not cool man'})
            console.log(err)
        })
    }

}