import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {cartData} from './../../ducks/reducer';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './../../Stripekey';
import {withRouter} from 'react-router';
import './Cart.css';




class Cart extends Component {
    constructor(){
        super();
        this.state = {
            quantity: 1,
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
           this.setState({quantity: 1})
           this.updateTotal(); 
        })
    }
  
   deleteFromCart(e){
       axios.delete(`/api/resort/${e.id}`).then(res => {
           this.props.cartData(res.data)
           this.setState({total: 0})
           this.updateTotal();
        })
    }

   handleQuantity(e, value){
    axios.put(`/api/quantity/${e}?quantity=${value}`).then(res => {
        this.props.cartData(res.data);
        this.setState({ total: 0})
         this.updateTotal()
         })           
}

  updateTotal(){
     const total = this.props.cart.map((e) => {
            var Total = this.state.total + e.price * e.quantity;
            this.setState({total: Total})
     })
  } 
  

    render(){
        let displayCart = this.props.cart ? 
        this.props.cart.map((e) => {
            return(
                <div className="item" key={e.id}>
                    <div className='item-resort'>
                        <h4 className='font'>{e.resort}</h4>  
                    </div>
                    <div className='item-pass'>
                        <h4 className='font'>{e.pass}</h4>  
                    </div>
                    <div className='item-price'>
                        <h4 className='font'>{`$${e.price}.00`}</h4>  
                    </div>
                        <div className="item-quantity">
                            <select  className='fonts' value={e.quantity} onChange={event => this.handleQuantity(e.id,  event.target.value)}>
                                <option value='1' >1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </select>
                        </div>
                        <button className='trash-btn' type="button" onClick={() => this.deleteFromCart(e)}>
                        <i className="far fa-trash-alt display-5"></i>
                        </button>                             
                                 
                </div>)}) : <h1 className="">'Your Cart Is Empty'</h1>
        return(
            <div className="cart-bg" >
            <div className='outer-cart'>
            <div className='box-cart'>
                <div className='cart-logo'>
                    <h1 className='font-cart' ><i className="fas fa-shopping-cart"></i>   Shopping Cart</h1>
                </div>
                    {displayCart[0] ? 
                <div className='cart-info'>
                <div className='cart-names'>
                        <h3 className='font'>Resort</h3>
                        <h3 className='font'>Pass</h3>
                        <h3 className='font'>Price</h3>
                        <h3 className='font'>Quantity</h3>
                        
                </div>
                <hr/>
                <div className='cart-items'>
                        {displayCart}
                </div>
                <div className='total-box'>
                <div className='total-inner'>
                        <h4 className='font'>Total:</h4>
                        <h4 className='font'>${this.state.total}.00</h4>   
                        <StripeCheckout 
                        className='stripe'
                            token={this.onToken}
                            stripeKey={stripe.pub_key}
                            amount={this.state.total * 100}
                        />        
                    
                </div>
                </div>
                
                </div>
                  
             : <h1 className='font'>Your Cart Is Empty</h1>}
                
            </div>
                
            </div>
            </div>
                
         

        )
    }
}
function mapStateToProps(state){
   
    return{
        cart: state.cart
    }
}
export default connect(mapStateToProps, {cartData})(withRouter(Cart));