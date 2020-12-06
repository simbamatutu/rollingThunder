import React, { Component } from 'react'


export class Quote extends Component {
    render() {
        return (
            <div className='Quote'>
                <p id='text'>{this.props.qoute}</p>
                <p id='author' style={{ textAlign: 'right', margin: '1ch 0ch 2ch 1ch' }}> - {this.props.author}</p>

            </div>
        )
    }
}

export default Quote
