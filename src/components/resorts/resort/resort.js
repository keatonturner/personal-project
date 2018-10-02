import React from 'react';
import axios from 'axios';



class Resort extends React.Component {
    constructor(){
        super();
        this.state = {
            resort: [],
            quantity: ''
        }
    }



    componentDidMount(){
        axios.get(`/api/resort/${this.props.match.params.id}`).then(res => {
            
            this.setState({resort: res.data})
        })
    }
    addToCartDayPass(e){
        axios.post('/api/addToCart', {price: e.daypass, pass: 'Day', id: this.props.match.params.id}).then(res => {
            
        })
    }
    addToCartSeasonPass(e){
        axios.post('/api/addToCart', {price: e.seasonpass, pass: 'Season', id: this.props.match.params.id}).then(res => {

        })
    }
   


    render(){ 
        const styles = {width: '100vw', height: '90vh'} 
        const styles2 = {width: '30vw', height: '40vh', paddingTop: '50px', flexDirection: 'space-around'}
        let resortInfo = this.state.resort.map((e, i) => {
            return(
            <div className="bg-dark" style={styles} >
                <h1 className="bg-light text-dark">{e.resort}</h1>
                <div className="list-group list-group-flush" >
                    <div className="list-group-item d-flex bd-highlight bg-dark" >
                        <h2 className="p-2 flex-fill bd-highlight text-light">Address:</h2>
                        <h4 className="p-2 flex-fill bd-highlight text-light">{e.address}</h4>                  
                    </div>
                    <div className="list-group-item d-flex bd-highlight bg-dark" >
                        <h2 className="p-2 flex-fill bd-highlight text-light">City:</h2>
                        <h4 className="p-2 flex-fill bd-highlight text-light"> {e.city}</h4>         
                    </div>
                <div className="d-flex align-items-center justify-content-around bd-highlight bg-dark"  >
                    <div className="d-flex align-items-center flex-column justify-content-around bg-light " style={styles2} >
                        <h2 className="text-dark">Day Pass</h2>
                    <div className="d-flex bd-highlight bg-light">
                        <h3 className="p-2 flex-fill bd-highlight text-dark">Price:</h3>
                        <h4 className="p-2 flex-fill bd-highlight text-dark " >{`$${e.daypass}.00`}</h4>
                    </div>
                        <button type="button" className="btn btn-light btn-sm text-dark border-5 border-dark" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.addToCartDayPass(e)}>Add To Cart</button> 
                            <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <h1 className="modal-content">
                                    Added To Cart
                                    </h1>
                                </div>
                            </div>             
                    </div>
                    
                    <div className=" d-flex align-items-center flex-column justify-content-around bg-light" style={styles2}>
                        <h2 className="text-dark" >Season Pass</h2>
                    <div className="d-flex bd-highlight bg-light">
                        <h3 className="p-2 flex-fill bd-highlight text-dark">Price:</h3>
                        <h4 className="p-2 flex-fill bd-highlight text-dark"> {`$${e.seasonpass}.00`}</h4>
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