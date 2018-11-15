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
  
        <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark d-flex p-4 border-bottom border-light">
                    <div className='w-100 d-flex flex-column justify-content-center '>
                        <Link className='nav-link text-dark w-25 bg-light m-1 w-100' style={font} to='/home' ><i className="fas fa-snowflake" />{' '}Home</Link>  
                        <Link className='nav-link text-dark w-25 bg-light m-1 w-100' style={font} to='/resorts' ><i className="fas fa-snowflake" />{' '}Resorts</Link>      
                        <Link className='nav-link text-dark w-25 bg-light m-1 w-100' style={font} to='/cart' ><i className="fas fa-snowflake" />{' '}Cart</Link>                   
                        <Link className='nav-link text-dark w-25 bg-light m-1 w-100' style={font} to='/account'><i className="fas fa-snowflake" />{' '}Account</Link>     
                    </div>
                </div>
            </div>
                <nav className="navbar navbar-dark d-flex flex-row justify-content-between bg-dark">
                <div>
                    <h2 className="text-light" style={font}><i className="fas fa-snowflake"></i>We Ski Utah</h2> 
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                </nav>
        </div>
        
            
       
        
            
    )
}    
}
export default withRouter(Nav);
