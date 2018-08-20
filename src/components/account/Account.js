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
        const bg = {width: "100%", height: "90vh"}
        const img = {width: '50%'}
        const img2 = {height: '200px', width: '200px'}
        const logout = {height: '200px'}
        const bg5 = {alignItems: 'center',
            flexDirection: 'column'}
        const {user} = this.props;
        return(
            <div className="bg-dark" style={bg}>
                <h1 className="text-light bg-dark border border-light">Account Information</h1>
                
                {
                    user.user_name ? (
            <div className="d-flex justify-content-center" style={bg5} >
                <div className="bg-light d-flex  bd-highlight mb-3" style={img}>
                    <img src={user.picture}  alt='' className="img-thumbnail border border-dark mr-auto p-2 bd-highlight" style={img2} />
                    <div className="p-2 bd-highlight flex-column">
                    <p className="p-2 bd-highlight "> Name: {user.user_name}</p>
                    <p className="p-2 bd-highlight"> Email: {user.email}</p>                        
                    </div>
                    
                            
            </div>
            <button className=" bg-dark btn btn-outline-light" style={img} onClick={() => this.logout()}>Logout</button>
                </div>
                ) : <div>
                <h1 className="text-light">Please Login.</h1>
                <button className=" bg-dark btn btn-outline-light"  onClick={() => this.logout()}>Login</button>
                </div>
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