import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import Quotebox from './components/Quotebox'


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qoutation: []
    }


  }
  componentDidMount() {
    axios.get('https://type.fit/api/quotes')
      .then(res => this.setState({
        qoutation: res.data
      }));
  }

  render() {

    return (
      <div className="App">
        <Quotebox id='quote-box'
          choosenQoute={this.state.qoutation}
          style={QuoteBoxStyle} />
      </div>
    )
  }
}

const QuoteBoxStyle = {
  backgroundColor: '#fff',
  position: 'absolute',
  top: '50%',

  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'center',
  margin: '0ch 1.3ch 0ch 1.3ch',
  padding: '1ch 1ch 2ch 1ch',
  height: 'auto',
  width: 'auto',
  color: 'black'

}

export default App











