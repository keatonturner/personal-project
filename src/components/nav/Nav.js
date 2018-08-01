import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';


function Nav(props){
    const {location} = props;
    if(location.pathname === '/'){
        return ''
    } else {

    return(
        <div>
            <Link to='/home' >Home</Link>
            <Link to='/resorts' >Resorts</Link>
            <Link to='/cart' >Cart</Link>
            <Link to='/account'>Account</Link>
        </div>
    )
}    
}
export default withRouter(Nav);
