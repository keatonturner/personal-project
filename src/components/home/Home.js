import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateResorts, activateCart} from './../../ducks/reducer';
import './Home.css';




class Home extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

    componentDidMount(){
        axios.get('/api/resorts').then(res => {
            this.props.updateResorts(res.data.resorts)
            this.props.activateCart(res.data.cart)
        })
    }
    Submit(){
      axios.post(`/api/nodemailer?name=${this.state.name}&email=${this.state.email}&message=${this.state.message}`).then(res => {

      })
      this.setState({name: '', email: '', message: ''})
    }
    onChange(prop, val){
        this.setState({
            [prop]: val
      })
    }

    render(){
      
        return(
        <div className='.slide'>
          <div className='inner-slide'>
            <div className='home-content'>
              <div className='home-inner'>
              <div className='bindings-1'>
                <h1>. . . . .</h1>
                <h1>. . . . .</h1>
              </div>
              <div className='bindings-2'>
              <h1>. . . . .</h1>
              <h1>. . . . .</h1>
              </div>
                
              </div>
              <div className='home-big'>
                  
                  <h1  className='h1-tag'><i className="fas fa-snowflake"></i>Utah is home to the worlds greatest snow on earth.<i className="fas fa-snowflake"></i></h1>
                  <hr />
                  <div className='outer-img'>

                  <img className='home-img'  src='http://wasir123.info/wp-content/uploads/mountain-ropeway-ski-resort-2-skiing-desktop-wallpapers-5.jpg' alt=''/>
                  </div>
              </div>
              
            </div>
          </div>
          <div className='contact'>
                  <h1 className='contact-h1'>Contact</h1>
                  <p className='p-tag'>Any questions or concerns about our product please contact us.</p>
              <div className='outer-name'>
                <div className='name-email'>
                  <div className='email-name'>
                  <div className='home-name'>
                    <h3 className='h3-name'>Name:</h3>
                    <input className='input-name' onChange={(e) => this.onChange('name', e.target.value)}/>
                  </div>
                    <div className='home-email'>
                    <h3 className='h3-name'>Email:</h3>
                    <input className='input-email' onChange={(e) => this.onChange('email', e.target.value)}/>
                  </div>

                  </div>
                  <div className='message-outer'>
                    
                  </div>
                  <div className='outer-message'>
                  <div className='home-message'>
                    <h3 className='h3-name'>Message:</h3>
                    <input className='input-message' onChange={(e) => this.onChange('message', e.target.value)}/>
                  </div>
                  </div>
            
                </div>
                    <button className='submit' onClick={() => this.Submit()}>Submit</button>

              </div>
            </div>  
        </div>
        
           
        )
    }
}


export default connect(null, {updateResorts, activateCart})(Home)