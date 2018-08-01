import React, {Component} from 'react';


export default class Home extends Component {

login(){
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
    let url = `${window.location.origin}/auth/callback`;
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
}

    render(){
        return(
            <div>
                <h1>Title of my app</h1>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}