import React, { Component } from 'react'


import './App.css';
import Quotebox from './components/Quotebox'



export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <Quotebox id='quote-box' style={QuoteBoxStyle} />

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
  minWidth: '25rem',
  maxWidth: 'auto',
  color: 'black'

}

export default App











