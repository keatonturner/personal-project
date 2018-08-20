import React, {Component} from 'react';



export default class Auth extends Component {

login(){
    
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
    let url = `${window.location.origin}/auth/callback`;
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
}

    render(){
        const jumbotron = {
            backgroundImage: 'url(http://theknow.denverpost.com/wp-content/uploads/2017/10/SPRINGSKIINGA-1080x754.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            top: '0',
            bottom: '0',
            height: '100vh',
            display: 'flex',
           alignItems: 'center'}
        return (
    <div className='jumbotron border border-dark d-flex justify-content-center ' style={jumbotron}>
        <div className="container-md border border-light shadow-lg p-3 mb-5 bg-dark rounded">
        <i class="fas fa-snowflake display-4 text-light"></i> 
                    <h1 className="display-4 text-light font-weight-bold"> We Ski Utah</h1>  
                    <hr />
                    <button className='btn btn-outline-light btn-lg' type='button' onClick={() => this.login()}>Login</button>    
        </div>       
    </div>
                      
   
        )
    }
}