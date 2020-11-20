import React, { Component } from 'react'
import './App.css';
import Quotecontainer from './components/Quotecontainer';
//import Quote from './components/Quote';

export class App extends Component {
    state={
      quote : [
          {
            id:1,
            Acquote:"“Can't you see that I'm only advising you to beg yourself not to be so dumb?”",
            author: "- Petronius, The Satyricon"
          },
          {
            id:2,
            Acquote:"“A journey, I reflected, is of no merit unless it has tested you.”",
            author :"Tahir Shah, In Search of King Solomon's Mines"
          },
          {
            id:3,
            Acquote:"“A text is evolutionary by its very nature.”",
            author :"Reif Larsen, The Selected Works of T.S. Spivet"
          }
      ]
    };

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Quotecontainer quote={this.state.quote} />
      </header>
    </div>
    )
  }
}

export default App


 
