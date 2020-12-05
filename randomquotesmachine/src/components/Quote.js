import React, { Component } from 'react'
import Navigate from './Navigate'

export class Quote extends Component {
    render() {
        return (
            <div className='Quote'>
                <p id='text'>{this.props.qoute}</p>
                <p id='author'> - {this.props.author}</p>
                <Navigate />
            </div>
        )
    }
}

export default Quote
