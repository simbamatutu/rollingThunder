import React, { Component } from 'react'
import Qoute from '../components/Quote'
export class Quotebox extends Component {
    render() {
        return (
            <div className='Quotebox'>
                <p>{this.props.choosenQoute}</p>                
            </div>
        )
    }
}

export default Quotebox
