import React, { Component } from 'react'
import './App.css';
import Quotebox from './components/Quotebox'


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qoutation: [
        {
          id: 1,
          qoute: 'Where we go one, we all go!',
          author: 'Donald .J. Trump'
        },
        {
          id: 2,
          qoute: 'Our fight of fury!Where we go one, we all go!',
          author: 'Imortall Joe'
        }
      ]
    }


  }


  render() {

    return (
      <div className="App">
        <Quotebox id='quote-box' choosenQoute={this.state.qoutation} />
      </div>
    )
  }
}

export default App











