import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Auth from './components/login/Auth';
import Resorts from './components/resorts/Resorts';
import Cart from './components/cart/Cart';
import Account from './components/account/Account';
import Resort from './components/resorts/resort/Resort';
import Payment from './components/payment/Payment';



export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route  path='/home' component={Home} />
        <Route  path='/resorts' component={Resorts} />
        <Route  path='/cart' component={Cart} />
        <Route  path='/account' component={Account} />
        <Route  path='/resort/:id' component={Resort} />
        <Route  path='/thankyou' component={Payment} />
    </Switch>
)