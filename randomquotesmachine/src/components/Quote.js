import React, { Component } from 'react'
import Navigate from './Navigate'

export class Quote extends Component {
    render() {
        return (
            <div className='Quote'>
                <p>{this.props.qoute}</p>
                <p>{this.props.author}</p>
                <Navigate />
            </div>
        )
    }
}

export default Quote
