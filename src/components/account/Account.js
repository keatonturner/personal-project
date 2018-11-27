import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUserData } from '../../ducks/reducer';
import './Account.css';


 class Account extends Component {
    componentDidMount(){
axios.get('/api/user-data').then(res => {
    this.props.updateUserData(res.data);
});
    }

    logout(){
        axios.get('/api/logout').then(res => {
            this.props.history.push('/')
        })
    }
    render(){
        const {user} = this.props;
        return(
            <div className="bg-back" >
                    {user.user_name ? (
                <div className="prof-bg" >
                    <div className='bord-img'>
                        <img src={user.picture}  alt='' className="prof-img"  /> 
                    </div>
                    <hr />
                    <div>
                        <h4 style={{textDecoration: 'underline'}}>Username</h4>
                        <h5 className="username"> {user.user_name}</h5>
                    </div>
                    <div>
                        <h4 style={{textDecoration: 'underline'}}>Email </h4>
                        <h5 className="email"> {user.email}</h5>                                 
                    </div>
                    <button className="logout-btn" onClick={() => this.logout()}>Logout</button>
                </div>
            ) : <div className='l-bg'>
                    <h1 className="login-tag">Please Login.</h1>
                    <button className="logout-btn"  onClick={() => this.logout()}>Login</button>
                </div>}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        user: state.user
}
}
export default connect(mapStateToProps, {updateUserData})(Account);