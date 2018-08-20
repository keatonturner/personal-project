require('dotenv').config();
const express = require('express');
const session = require('express-session');
const axios = require('axios');
const massive = require('massive');
const bodyParser = require('body-parser');
const ctlr = require('./controller');
const config = require('./config')
const stripe = require('stripe')(config.secret_key);
const path = require('path');




const app = express();
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());
const {
    CONNECTION_STRING,
    SESSION_SECRET,
    REACT_APP_SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET
} = process.env;





        app.use(session({
            secret: SESSION_SECRET,
            resave: false,
            saveUninitialized: false
        }));


app.get('/auth/callback', async (req, res) => {
    try{
            let payload = {
                client_id: REACT_APP_CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code: req.query.code,
                grant_type: "authorization_code",
                redirect_uri: `${process.env.PROTOCOL}://${req.headers.host}/auth/callback`
            }
           

        let resWithToken = await axios.post(
            `https://${REACT_APP_DOMAIN}/oauth/token`,
        payload);


        let resWithUserData = await axios.get(
            `https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`
        );


const db = req.app.get('db')

let {sub, email, name, picture} = resWithUserData.data;

        let foundUser = await db.find_user([sub])
        if(foundUser[0]){
            req.session.user = foundUser[0];
            res.redirect('/#/home')
        }else {
            let createUser = await db.create_user([name, email, sub, picture])
            req.session.user = createUser[0];
            res.redirect('/#/home')
        };
    }catch(err){
        console.error(err);
    }
    });


    app.get('/api/user-data', (req, res) => {
            if (req.session.user) {
            res.status(200).send(req.session.user);
            } else {
            res.status(401).send('Nice try sucka!');
            }
        });
  
  app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.send();
  });



  app.get('/api/resorts', ctlr.allResorts)
  app.get('/api/resort/:id', ctlr.specificResort)
  app.get('/api/cart', ctlr.createCart)
  app.get('/api/cartData', ctlr.cartResorts)
  app.post('/api/addToCart', ctlr.addToCart)
  app.delete('/api/resort/:id', ctlr.deleteFromCart)
  app.put('/api/quantity', ctlr.quantity)
  app.post('/api/payment', ctlr.payment)
  app.put('/api/clearCart', ctlr.clearCart)

  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
app.listen(REACT_APP_SERVER_PORT, () => {
    console.log(`listening on port: ${REACT_APP_SERVER_PORT}`)
    })
});

