import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUserData } from '../../ducks/reducer';


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
            <div>
                <h1>Account Information</h1>
                {
                    user.user_name ? (
                <div>
                    <img src={user.picture} alt='' />
                    <p>Account Holder: {user.user_email}</p>
                    <p>Account Email: {user.email}</p>
                    <button onClick={() => this.logout()}>logout</button>
                </div>
                ) : <p>Please Log In.</p>
                }
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