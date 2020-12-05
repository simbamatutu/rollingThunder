import React, { Component } from 'react'


export class Quote extends Component {
    render() {
        return (
            <div className='Quote'>
                <p id='text'>{this.props.qoute}</p>
                <p id='author'> - {this.props.author}</p>
                
            </div>
        )
    }
}

export default Quote
