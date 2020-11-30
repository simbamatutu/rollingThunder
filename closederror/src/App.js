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

      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

  }

  reload = () => {
    let count = new Date('March 11, 2021 03:24:00').getTime();
    let now = new Date().getTime();
    let Deadline = count - now;

    this.setState({

      days: Math.floor(Deadline / (1000 * 60 * 60 * 24)),
      hours: Math.floor((Deadline % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((Deadline % (1000 * 60 * 60) / (1000 * 60))),
      seconds: Math.floor((Deadline % (1000 * 60)) / 1000)
    });

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.reload(), 1000
    );

  }
  render() {

    console.log(this.state.days);
    return (

      <div className="container">
        <Textbody />
        <Notifyme />
        <Countdown days={this.state.days}
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
        <Footer />
      </div>


    )
  }
}

export default App;
