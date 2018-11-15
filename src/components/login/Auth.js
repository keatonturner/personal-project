import React, {Component} from 'react';
import './Auth.css';


export default class Auth extends Component {

login(){
    
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
    let url = `${window.location.origin}/auth/callback`;
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
}

    render(){
     
        return (
    <div className='auth-bg ' >
        <section id='auth-card' >
        <div id='border-bg'>
            <h1 id="auth-title"  > We Ski Utah</h1>  
                <hr style={{height: '1px', width: '90%', backgroundColor: 'black'}} />
                <div id='flex-btn'  >
                    <button id='login-btn' type='button'  onClick={() => this.login()}>Login</button>   
                </div>
            
        </div>
        </section>      
    </div>
                      
   
        )
    }
}