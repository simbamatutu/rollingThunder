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
          },
          {
            id:4,
            Acquote:"“Cellaholics are those who interrupt quality time when they are with you, but rather text, call, and email others who are somewhere else. ”",
            author :"Jayce O'Neal"
          },
          {
            id:5,
            Acquote:"“A text is evolutionary by its very nature.”",
            author :"Reif Larsen, The Selected Works of T.S. Spivet"
          },
          {
            id:6,
            Acquote:"“Separate text from context and all that remains is a con.”",
            author :"Stewart Stafford"
          },
          {
            id:7,
            Acquote:"“A text always remains in crucial ways ‘imperceptible’.”",
            author :"Nicholas Royle, Jacques Derrida"
          }
      ]
       
    };

    choosen ()  {
      return Math.floor((Math.random()*6)+1);
    }

    changeBackground(){
      var r,g,b;
      r= Math.floor((Math.random()*256));
      g= Math.floor((Math.random()*256));
      b= Math.floor((Math.random()*256));
      var bgColor = "rgb(" + r + "," + g + "," + b + ")";
      document.body.style.background = bgColor;
      document.body.style.color = bgColor;
      console.log(bgColor);
    }
    
   
  render() {
    return (
      <div className="App" >
      <header className="App-header">
      {this.changeBackground()}
        <Quotecontainer quote={this.state.quote[ this.choosen() ]} />
      </header>
    </div>
    )
  }
}

export default App


 
