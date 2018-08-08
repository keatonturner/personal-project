import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import './Nav.css';



function Nav(props){
    const NavBar = {textDecoration: 'none', color: 'white', fontSize: '25px'}
    const {location} = props;
    if(location.pathname === '/'){
        return ''
    } else {

    return(
        <nav className='nav nav-pills nav-justified navbar fixed-top navbar-expand-md navbar-dark bg-dark'  style={NavBar} >
        <div className='nav navbar' >
            <h1>We ski utah</h1>     
        </div>
        <div className='nav-item nav justify-content-end' style={{color: 'white'}}>
            <Link className='nav-link' to='/home' ><button type='button' className='btn btn-outline-light btn-md'>Home</button></Link>  
            <Link className='nav-link ' to='/resorts' ><button type='button' className='btn btn-outline-light btn-md' >Resorts</button></Link>      
            <Link className='nav-link ' to='/cart' ><button type='button' className='btn btn-outline-light btn-md'>Cart</button></Link>                   
        </div>
        <div className='nav-item nav justify-content-end'>
            <Link className='nav-link text-light' to='/account'>Account</Link>            
            
        </div>
        </nav>
        
            
       
        
            
    )
}    
}
export default withRouter(Nav);
