import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateResorts} from './../../ducks/reducer';
import {Link} from 'react-router-dom';
import './../resorts/Resorts.css'


class Resorts extends Component {
    render(){
        
        let resortList = this.props.resorts.map((e, i) => {
            return(
                        <ul className="resorts-list" key={i}>
                            <i className="far fa-circle"></i>
                                <Link className="link" to={`/resort/${e.id}`}>
                                    <h4 className="resort-name" >{e.resort}</h4>
                                </Link>
                        </ul>
            )
        })
        return(
            <div className='outest' >
                <div className='inner'>
                    <div className='outest-title'>
                        <div className='outer-title'>
                            <h1 className=" title">Utah Resorts</h1>
                        </div>  
                    </div>
                    <div className='list'>
                        {resortList}
                    </div>
                </div>
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