import React from 'react';
import axios from 'axios';
import './Resort.css';



class Resort extends React.Component {
    constructor(){
        super();
        this.state = {
            resort: [],
            quantity: 1
        }
    }



    componentDidMount(){
        axios.get(`/api/resort/${this.props.match.params.id}`).then(res => {
            
            this.setState({resort: res.data})
        })
    }
    addToCartDayPass(e){
        axios.post('/api/addToCart', {price: e.daypass, pass: 'Day', id: this.props.match.params.id, quantity: this.state.quantity}).then(res => {
            
        })
    }
    addToCartSeasonPass(e){
        axios.post('/api/addToCart', {price: e.seasonpass, pass: 'Season', id: this.props.match.params.id}).then(res => {

        })
    }


    render(){ 
        let resortInfo = this.state.resort.map((e, i) => {
            return(
            <div className="resort-bg"  >
            <div className='resort-outer'>
                <div className='outer-bg'>
                    <div className='resort-box'>
                        <h1 className="names1">{e.resort}</h1>
                        
                    </div>
                    <hr/>
                    <div className='address-box'>
                        <h3 className="names">Address:</h3>
                        <h4 className="names">{e.address}</h4>                    
                    </div>
                    <hr/>
                    <div className='city-box'>
                        <h3 className="names">City:</h3>
                        <h4 className="names"> {e.city}</h4>               
                    </div>
                </div>
                <div className='outer-pass'>
                    <div className='outer-day'>
                        <h3 className="season-name">Day Pass</h3> 
                        <div className='price'>
                        <h4 className="names" >{`$${e.daypass}.00`}</h4> 
                    </div>    
                        <button 
                            type="button" 
                            className="btn btn-light btn-sm text-dark border-5 border-dark" 
                            data-toggle="modal" 
                            data-target=".bd-modal-sm" 
                            onClick={() => this.addToCartDayPass(e)}>
                            Add To Cart
                        </button> 
                            <div id='Modal' 
                                className="modal fade bd-modal-sm" 
                                focus='true'  
                                role="dialog"
                                tabIndex='-1'  
                                aria-labelledby="mySmallModalLabel" 
                                style={{top:'25%', width: '100%', height: 'auto'}}>
                                <div className='modal-dialog modal-sm' role='document' >
                                    <div className='modal-content d-flex flex-row justify-content-between'>
                                        <div className="modal-header">
                                            <h2 className="modal-title">Added To Cart</h2>
                                        </div>
                                        <div className='modal-body'> 
                                            <button type="button" className="modal-close" data-dismiss="modal" aria-label="Close" >
                                                <span aria-hidden="true">&times;</span>
                                            </button>  
                                        </div>
                                    </div>
                                </div>
                            </div>             
                    
                    </div>
                
                    <div className='outer-season'>
                        <h3 className="season-name" >Season Pass</h3>
                        <div className='price'>
                        <h4 className="names"> {`$${e.seasonpass}.00`}</h4>  
                        </div>
                        <button type="button" className="btn btn-light btn-sm text-dark border-5 border-dark" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.addToCartSeasonPass(e)}>Add To Cart</button>   
                            <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <h1 className="modal-content text-white">
                                    Added To Cart
                                    </h1>
                                </div>
                            </div>     
                    </div>  
                </div>
            </div>
        </div>
                                 
               
                
           
    
            )
        })
            
    return(
    <div>
    
        {resortInfo}
    
    </div>
    )
}
}


export default Resort;