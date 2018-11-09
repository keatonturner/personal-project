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
        const img = {width: '40%'}
        const img2 = {height: '200px', width: '200px'}
        const logout = {height: '200px'}
        const bg5 = {alignItems: 'center',
            flexDirection: 'column'}
        const {user} = this.props;
        return(
            <div className="bg-light" style={bg}>
                <h1 className="text-dark bg-light">Account Information</h1>
                {
                    user.user_name ? (
            <div className="d-flex justify-content-center " style={bg5} >
                <div className = "bg-light d-flex  bd-highlight mb-3 border border-dark"
                style = {
                    img
                } >
                    <img src={user.picture}  alt='' className="img-thumbnail border border-dark mr-auto p-2 bd-highlight" style={img2} />
                    <div className="p-2 bd-highlight flex-column">
                    <h4 className="p-2 bd-highlight "> Name: {user.user_name}</h4>
                    <h4 className="p-2 bd-highlight"> Email: {user.email}</h4>                        
                    </div>
                    
                            
            </div>
            <button className=" btn btn-outline-dark" style={img} onClick={() => this.logout()}>Logout</button>
                </div>
                ) : <div>
                <h1 className="text-dark">Please Login.</h1>
                <button className=" btn btn-outline-dark"  onClick={() => this.logout()}>Login</button>
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