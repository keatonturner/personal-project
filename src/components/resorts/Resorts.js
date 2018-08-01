import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateResorts} from './../../ducks/reducer';
import {Link} from 'react-router-dom';


class Resorts extends Component {
    render(){
        //console.log(this.props.resorts)
        let resortList = this.props.resorts.map((e, i) => {
            return(
                <div key={i}>
                    <Link to={`/resort/${e.id}`}><li>{e.resort}</li></Link>
                </div>
            )
        })
        return(
            <div>
                resorts page
                {resortList}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        resorts: state.resorts
    }
}

export default connect(mapStateToProps, {updateResorts})(Resorts)