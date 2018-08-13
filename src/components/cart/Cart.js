import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {cartData} from './../../ducks/reducer';


class Cart extends Component {


   componentDidMount(){
       axios.get('/api/cartData').then(res => {
           this.props.cartData(res.data)
       })
   }
   deleteFromCart(e){
       axios.delete(`/api/resort/${e.id}`).then(res => {
           this.props.cartData(res.data)
       })
   }

    render(){
        let displayCart = this.props.cart ? 
        this.props.cart.map((e, i) => {
            return(
            <div key={i}>
                
                <h1>{e.resort}</h1>
                <p>Pass: {e.pass}</p>
                <p>{`$${e.price}.00`}</p>
                <button onClick={() => this.deleteFromCart(e)}>delete</button>
                    
            </div>
            ) 
        }) : 'Your Cart Is empty'
        return(
            <div>
                
                {displayCart}
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
export default connect(mapStateToProps, {cartData})(Cart)