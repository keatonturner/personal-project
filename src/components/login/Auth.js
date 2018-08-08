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
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px', fontSize: '70px' };
console.log('rendering')
        return (
    <div className='login-page'>
            
        <div className='login' style={wellStyles}>
                <div className='login-header'>
                    <h1>Ski Utah</h1>  
                </div>
                <div className='login-btn'>

                
                    <button className='btn btn-primary btn-lg btn-block' type='button' onClick={() => this.login()}>Login</button>   
                </div>
        </div>
                      
    </div>
        )
    }
}