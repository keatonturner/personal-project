import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateResorts} from './../../ducks/reducer';


class Home extends Component {

    componentDidMount(){
        axios.get('/api/resorts').then(res => {
            this.props.updateResorts(res.data)
        })
    }

    render(){
        return(
            <div>
                home page
            </div>
        )
    }
}


export default connect(null, {updateResorts})(Home)