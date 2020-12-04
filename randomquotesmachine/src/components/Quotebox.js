import React, { Component } from 'react'
import Quote from './Quote'
 
export class Quotebox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomQoute:'',
            randomAuthour:''
        }

        
       
        
    }
        componentDidMount(){
            this.props.choosenQoute.map((q)=>(
                this.setState({
                    randomQoute:q.qoute,
                    randomAuthour:q.author
                })
                
            ));
        }


    render() {
       
        return (
            <div className='Quotebox'>
                <Quote qoute={this.state.randomQoute} author={this.state.randomAuthour} />
            </div>
            
        )
    }
}

export default Quotebox
