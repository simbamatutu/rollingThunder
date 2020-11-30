import React, { Component } from 'react'

import './App.css';
import Notifyme from './componets/Notifyme';
import Textbody from './componets/Textbody';
import Countdown from './componets/Countdown';
import Footer from './componets/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: new Date('December 17, 2020 03:24:00').getTime(),
      now: new Date().getTime(),
      Deadline: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.reload(), 1000
    );

  }



  reload = () => {
    this.setState({
      Deadline: this.count - this.now,
      days: Math.floor(this.Deadline / (1000 * 60 * 60 * 24)),
      hours: Math.floor((this.Deadline % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((this.Deadline % (1000 * 60 * 60) / (1000 * 60))),
      seconds: Math.floor((this.Deadline % (1000 * 60)) / 1000)
    });
  }


  render() {

    console.log(this.state.days);
    return (

      <div className="container">
        <Textbody />
        <Notifyme />
        <Countdown />
        <Footer />
      </div>


    )
  }
}

export default App;
