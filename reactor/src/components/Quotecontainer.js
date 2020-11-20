import React, { Component } from 'react'
import Quote from './Quote';

export class Quotecontainer extends Component {
    render() {
        return (
            <div className ='quoteCointainer'>
            <Quote qoute={this.props.quote[1]} />
            </div>
        );
    }
}

export default Quotecontainer
