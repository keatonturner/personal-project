import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Payment extends Component {
  render() {
      const btn = {marginTop: '24vh'};
      const bg = {
          width: '100%', 
      height: '90vh',  
      backgroundImage: "url(https://cdn.dribbble.com/users/330174/screenshots/2695600/comp_2.gif)",
      backgroundSize: 'cover',      
      backgroundPosition: 'center',
      position: 'relative',
      top: '0',
      bottom: '0',
      display: 'flex',
      justifyContent: 'space-around'
    }
    return (
      <div style={bg}>
      <div className="d-flex flex-column bd highlight mb-3" style={btn}>
        <h1 className="p-2 bd highlight text-dark">Thank You, We Hope You Enjoy Your Purchase!</h1>
        <Link className="p-2 bd highlight" to='/home'><button  type="button" className="btn btn-link text-dark border border-dark rounded" style={btn}>Okay</button></Link>        
      </div>
      </div>
    )
  }
}


