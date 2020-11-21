import React, { Component } from 'react'
import Extras from './Extras';
import Quote from './Quote';

export class Quotecontainer extends Component {
    render() {
        return (
            <div className ='quoteCointainer' >
            <Quote qoute={this.props.quote} />
            <Extras />
            </div>
        );
    }
}

export default Quotecontainer
