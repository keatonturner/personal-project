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
        const styles = {width: '100vw', height: '100vh'} 
       

        let displayCart = this.props.cart ? 
        this.props.cart.map((e, i) => {
            return(
          
                    <tr className="bg-light text-dark border border-dark" key={i}>
                        <td>{e.resort}</td>
                        <td>{e.pass}</td>
                        <td>{`$${e.price}.00`}</td>
                        <td className="">
                        <form className="form-inline d-flex justify-content-center">
                            <select className="custom-select my-sm-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={e => this.handleQuantity(e.target.value)}>
                                <option value="0" selected>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <button type="button" className="close" aria-label="Close" onClick={() => this.updateQuantity(e.id)}>
                        <i className="far fa-check-circle display-5" onClick={() => this.updateQuantity(e.id)}></i> 
                        </button>
                        </form>                          
                        </td>    
                        <td>
                        <button type="button" className="close" aria-label="Close" onClick={() => this.deleteFromCart(e)}>
                        <i className="far fa-trash-alt display-5"></i>
                        </button>                             
                        </td>         
                    </tr>
                        
                    
           
            ) 
        }) : <h1 className="text-light">'Your Cart Is Empty'</h1>
        return(
            <div className="bg-dark " style={styles}>
            <h1 className="bg-light text-dark" ><i class="fas fa-shopping-cart"></i>   Shopping Cart</h1>
            {displayCart[0] ? 
            <table id="table" className="table table-hover table-borderless-top dt-responsive-sm dt-responsive-md dt-responsive-lg" style={{width: '100%'}} >
            <thead>
                    <tr className="text-light">
                        <th>Resort</th>
                        <th>Pass</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                {displayCart}
                <tr className="bg-light text-dark">
                <td colspan="2">Total:</td>
                <td > ${this.state.total}.00</td>
                <td colspan="2">
                <StripeCheckout 
                    token={this.onToken}
                    stripeKey={stripe.pub_key}
                    amount={this.state.total * 100}
                />      
                </td>
                </tr>
                </tbody>
            </table>
             : <h1 className="text-light">Your Cart Is Empty</h1>}
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