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
        <div  className='.slide'>

          <div className='count-particles'>
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

                  <img className='home-img'  src='https://images.unsplash.com/photo-1465220183275-1faa863377e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4522f2cfd26358642b9458f52c5b01d7&auto=format&fit=crop&w=1267&q=80' alt=''/>
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
                    <textarea className='input-message' onChange={(e) => this.onChange('message', e.target.value)}/>
                  </div>
                  </div>
            
                </div>
                <button type="button" className="btn  btn-sm text-light bg-transparent m-3 w-50 border-5 border-light" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.Submit()}>Submit</button> 
                            <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <h1 className="modal-content">
                                    Your Message Has Been Sent!
                                    </h1>
                                </div>
                            </div> 

              </div>
            </div>  
        </div>
        
           
        )
    }
}


export default connect(null, {updateResorts, activateCart})(Home)