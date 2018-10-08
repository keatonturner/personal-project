import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';




function Nav(props){
    const font = {fontFamily: 'Courgette, cursive'}
    const NavBar = {textDecoration: 'none', color: 'white', fontSize: '25px', background: 'linear-gradient(to left, #333, #333 40%, gray 50%, #333 70%)'}
    const {location} = props;
    if(location.pathname === '/'){
        return ''
    } else {

    return(
        <nav className='nav nav-pills nav-justified navbar navbar-expand-md navbar-dark bg-dark'  style={NavBar} >
        <div className='nav navbar' >
        
            <h1 className="text-light" style={font}><i className="fas fa-snowflake"></i>   We Ski Utah</h1>     
        </div>
        <div className='nav-item nav justify-content-end ' style={{color: 'white'}}>
            <Link className='nav-link text-light' style={font} to='/home' >Home</Link>  
            <Link className='nav-link text-light' style={font} to='/resorts' >Resorts</Link>      
            <Link className='nav-link text-light' style={font} to='/cart' >Cart</Link>                   
            <Link className='nav-link text-light' style={font} to='/account'>Account</Link>            
        </div>
        </nav>
        
            
       
        
            
    )
}    
}
export default withRouter(Nav);
