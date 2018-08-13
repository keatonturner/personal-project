import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateResorts, activateCart} from './../../ducks/reducer';
import './Home.css'


class Home extends Component {

    componentDidMount(){
        axios.get('/api/resorts').then(res => {
            this.props.updateResorts(res.data.resorts)
            this.props.activateCart(res.data.cart)
        })
    }

    render(){
        return(
<div id="carouselExampleIndicators" className="carousel slide carousel-fade border border-dark" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className=" carousel-inner h-50">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://image3.redbull.com/rbcom/010/2014-12-19/1331696030842_2/0010/1/1500/1000/2/snowboarder-elias-elhardt-in-action-for-kashmir-calling-snowboard-film-in-gulmarg-india.jpg" alt="Max-height 100%"/>
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Utah is home to the greatest snow on earth.</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="http://www.blog-ski.fr/wp-content/uploads/2017/01/mont-sainte-anne-hiver-quebec-1.jpg" alt="Max-height 100%"/>
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Park City Ski Resort is known to be the 10th biggest ski resort in the world.</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.skiutah.com/blog/authors/erika/hot-spring-ski-and-snowboarding/pictures/picture--large/picture--large" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Utah's Cottonwood Canyons are one of the snowiest places in the world averaging about 551 inches of snow a year.</h1>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
           
        )
    }
}


export default connect(null, {updateResorts, activateCart})(Home)