import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateResorts} from './../../ducks/reducer';
import {Link} from 'react-router-dom';


class Resorts extends Component {
    render(){
        const styler = {width:"450px", textDecoration: "none"}
        const bg = {
            backgroundImage:"url(http://justfunfacts.com/wp-content/uploads/2017/01/snow.gif)", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            top: '0',
            bottom: '0',
            height: '100%'
        }
        let resortList = this.props.resorts.map((e, i) => {
            return(
               
                    <div key={i} className="d-flex justify-content-center" >
                        <ul className="list-group d-flex p-2 bd-highlight bg-transparent" ><Link className="text-light" to={`/resort/${e.id}`}><h3 className="list-group-item shadow-lg p-2 mb-0 bg-dark rounded font-weight-bold border-3 border-light" style={styler}>{e.resort}</h3></Link></ul>
                    </div>
              
               
            )
        })
        return(
            <div style={bg} >
                <h1 className="text-light bg-dark border border-light">Utah Resorts</h1>
                <hr />
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