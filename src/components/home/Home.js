import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateResorts, activateCart} from './../../ducks/reducer';



class Home extends Component {

    componentDidMount(){
        axios.get('/api/resorts').then(res => {
            this.props.updateResorts(res.data.resorts)
            this.props.activateCart(res.data.cart)
        })
    }

    render(){
      const img = {
        width: '100%',
        height: '90vh'
        
      }
        return(
<div id="carouselExampleIndicators" className="carousel slide carousel-fade border border-dark" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
  </ol>
  <div className=" carousel-inner h-50">
    <div className="carousel-item active">
      <img className="d-block w-100" style={img} src="https://www.xtns.org/wp-content/uploads/2014/06/ski-resort-magnificent-park-city-mountain-resort-ski-instructor-park-city-ski-resort-vertical-drop-park-city-ski-resort-volunteers-park-city-mountain-resort-vs-talisker-park-city-mountain-resort-v.jpg" alt="Max-height 100%"/>
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Park City Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100"  style={img} src="https://skimap.org/data/225/1903/1446588920jpg_render.jpg" alt="Max-height 100%"/>
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Solitude Mountain Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://skimap.org/data/223/7/1211840866.jpg" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Deer Valley Ski resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://skimap.org/data/219/7/1232225432.jpg" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Snowbasin Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="http://www.skicentral.com/assets/images/trailmaps/801008-1200.jpg" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Powder Mountain Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://i.pinimg.com/originals/6a/2b/fc/6a2bfcb9b6affe9cf68e2e842c4b11fc.jpg" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Beaver Mountain Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://itech104boom.files.wordpress.com/2013/11/snowbird_trailmap_1200w.jpg?w=1400" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">SnowBird Mountain Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://skimap.org/data/222/1903/1414525007.jpg" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Brighton Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_default_logo_1.png,f_auto,h_800,q_auto,w_800/v1/production/trail_maps/7555bdee477aa402ff982279440299a8" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Sundance Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://www.skiutah.com/members/alta/trailmaps/picturewithconversions/fullsize" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Alta Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://www.skiutah.com/members/brian-head/trailmaps/picturewithconversions/fullsize" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Brian Head Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://www.skiutah.com/members/eagle-point/trailmaps/picturewithconversions/fullsize" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Eagle Point Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} src="https://www.skiutah.com/members/cherry/trailmaps/cherry-peak/fullsize/" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Cherry Peak Ski Resort</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={img} rc="https://www.skiutah.com/members/nordic-valley/trailmaps/picturewithconversions/fullsize" alt="Max-height 100%" />
      <div className="carousel-caption d-nine d-md-block bg-dark">
        <h1 className="text-light">Nordic Valley Ski Resort</h1>
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