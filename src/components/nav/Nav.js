import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';




function Nav(props){
    const NavBar = {textDecoration: 'none', color: 'white', fontSize: '25px'}
    const {location} = props;
    if(location.pathname === '/'){
        return ''
    } else {

    return(
        <nav className='nav nav-pills nav-justified navbar navbar-expand-md navbar-dark bg-dark'  style={NavBar} >
        <div className='nav navbar' >
        
            <h1 className="text-light"><i class="fas fa-snowflake"></i>   We Ski Utah</h1>     
        </div>
        <div className='nav-item nav justify-content-end ' style={{color: 'white'}}>
            <Link className='nav-link text-light' to='/home' >Home</Link>  
            <Link className='nav-link text-light' to='/resorts' >Resorts</Link>      
            <Link className='nav-link text-light' to='/cart' >Cart</Link>                   
            <Link className='nav-link text-light' to='/account'>Account</Link>            
        </div>
        </nav>
        
            
       
        
            
    )
}    
}
export default withRouter(Nav);
