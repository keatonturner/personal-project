import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Payment extends Component {
  render() {
    return (
      <div>
      <div>
      <div>
      <img src="https://www.bing.com/th?id=OIP.kqipghtaIRBybcMg3_ygDgHaG2&w=233&h=217&c=7&o=5&pid=1.7" alt='#' />
          
      </div>
        <h1>Thank You For Your Purchase!</h1>
        <Link to='/home'><button>Back To Home</button></Link>        
      </div>
      </div>
    )
  }
}


