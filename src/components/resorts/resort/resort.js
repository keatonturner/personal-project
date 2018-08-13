import React from 'react';
import axios from 'axios';



class Resort extends React.Component {
    constructor(){
        super();
        this.state = {
            resort: []
        }
    }



    componentDidMount(){
        axios.get(`/api/resort/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({resort: res.data})
        })
    }
    addToCartDayPass(e){
        console.log(this.props.match.params.id)
        axios.post('/api/addToCart', {price: e.daypass, pass: 'Day', id: this.props.match.params.id}).then(res => {
            console.log(res)
        })
    }
    addToCartSeasonPass(e){
        axios.post('/api/addToCart', {price: e.seasonpass, pass: 'Season', id: this.props.match.params.id}).then(res => {

        })
    }


    render(){  
        let resortInfo = this.state.resort.map((e, i) => {
            return(
                <div>
                <h1>{e.resort}</h1>
                <p>Address: {e.address}</p>
                <p>City: {e.city}</p>
                <div>
                <p>Day Pass: {`$${e.daypass}.00`}</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.addToCartDayPass(e)}>Add To Cart</button> 
                            <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm">
                                    <h1 class="modal-content">
                                    Added To Cart
                                    </h1>
                                </div>
                            </div>             
                </div>
                <div>
                <p>Season Pass: {`$${e.seasonpass}.00`}</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.addToCartSeasonPass(e)}>Add To Cart</button>   
                            <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm">
                                    <h1 class="modal-content text-white">
                                    Added To Cart
                                    </h1>
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