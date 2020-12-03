import React, { Component } from 'react'
import './App.css';
import Quotebox from './components/Quotebox'


export class App extends Component {
  constructor(props){
    super(props);
    this.state={ 
          qoutation:[
           { id:1,
            qoute:'Where we go one, we all go!',
            author:'Donald .J. Trump'
           },
           { id:2,           
            qoute:'Our fight of fury!',
            author:'Imortall Joe'
           }      
         ]               
    }

    
  }
  chosen(){
    return Math.floor((Math.random()*1)+1);
     
  }
  
  render() {
    
    return (
      <div className="App">
        <Quotebox id='quote-box' choosenQoute= {this.state.qoutation[this.chosen()] }/>
    </div>
    )
  }
}

export default App








 

 
