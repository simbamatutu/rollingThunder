import React, { Component } from 'react'

export class Quote extends Component {
    render() {
        return (
            <div className='Quote'>
                <p>{this.props.qoute.qoute}</p>
            </div>
        )
    }
}

export default Quote
