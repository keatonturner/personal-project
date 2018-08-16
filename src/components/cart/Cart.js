import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {cartData} from './../../ducks/reducer';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './../../Stripekey';
import {withRouter} from 'react-router';


class Cart extends Component {
    constructor(){
        super();
        this.state = {
            quantity: '',
            total: 0

        }
    }
    onToken = (token) => {
        token.card = void 0;
        axios.post('/api/payment', {token, amount: this.state.total}).then(
            axios.put('/api/clearCart').then(
                axios.get('/api/cartData').then(res => {
                    this.props.cartData(res.data)
                    this.props.history.push('/thankyou');
                })
            )

        )
    }


   componentDidMount(){
       axios.get('/api/cartData').then(res => {
           this.props.cartData(res.data)
           this.updateTotal();
       })
   }
   deleteFromCart(e){
       axios.delete(`/api/resort/${e.id}`).then(res => {
           this.props.cartData(res.data)
           this.setState({total: 0})
           this.updateTotal()
       })
   }
   updateQuantity(e){
       axios.put('/api/quantity', {id: e, quantity: this.state.quantity}).then(res => {
           this.setState({quantity: 1})
           this.props.cartData(res.data);
           this.setState({total: 0});
           this.updateTotal();
       })
   }
   handleQuantity(value){
       this.setState({quantity: value })
   }

  updateTotal(){
     const total = this.props.cart.map((e) => {
            var Total = this.state.total + e.price * e.quantity;
            this.setState({total: Total})
     })

  } 

    render(){
        let displayCart = this.props.cart ? 
        this.props.cart.map((e, i) => {
            return(
            <div key={i}>
                
                <h1>{e.resort}</h1>
                <h3>Pass: {e.pass}</h3>
                <h4>{`$${e.price}.00`}</h4>
                <h4>Quantity: {e.quantity}</h4>
                <input placeholder='quantity' onChange={e => this.handleQuantity(e.target.value)}/>
                <button onClick={() => this.updateQuantity(e.id)}>Save Changes</button>
                <button onClick={() => this.deleteFromCart(e)}>delete</button>
                    
            </div>
            ) 
        }) : 'Your Cart Is Empty'
        return(
            <div>
            {displayCart[0] ? 
            <div>
                {displayCart}
                <h3>Total: ${this.state.total}.00</h3>
                <StripeCheckout 
                    token={this.onToken}
                    stripeKey={stripe.pub_key}
                    amount={this.state.total * 100}
                />
            </div>
             : <h1>Your Cart Is Empty</h1>}
            </div>

        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return{
        cart: state.cart
    }
}
export default connect(mapStateToProps, {cartData})(withRouter(Cart));