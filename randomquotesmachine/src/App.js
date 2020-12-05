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
  componentDidMount(){
    axios.get('https://type.fit/api/quotes')
          .then(res=>this.setState({
            qoutation: res.data
          }));
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











