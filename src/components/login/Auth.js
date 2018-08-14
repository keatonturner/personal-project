import React, {Component} from 'react';
import './Auth.css'


export default class Auth extends Component {

login(){
    console.log('hit')
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
    let url = `${window.location.origin}/auth/callback`;
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
}

    render(){
        
        return (
    <div className='jumbotron jumbotron-fluid'>
        <div className="container">
                    <h1 className="display-4 text-primary font-weight-bold">We Ski Utah</h1>  
                    <hr />
                    <button className='btn btn-primary btn-lg' type='button' onClick={() => this.login()}>Login</button>    
        </div>       
    </div>
                      
   
        )
    }
}