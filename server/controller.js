



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
                    .then(cart => {res.status(200).send({cart, resorts})})
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
        dbInstance.add_to_cart([req.session.user.id, req.body.id, req.body.pass, req.body.price])
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
    }

}