import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Countdown extends Component {
    
    render() {
        return (
            <div className='countdown'>
            <div className="counters">
        <span className="days"> <h4>{this.props.days}</h4>  </span>
                <p className="c-t"> Days </p>
            </div>

            <div className="counters">
    <span className="days"> <h4>{this.props.hours}</h4>  </span>
                <p className="c-t">Hours</p>
            </div>

            <div className="counters">
                <span className="days"> <h4>{this.props.minutes}</h4>  </span>
                <p className="c-t">Minutes</p>
            </div>

            <div className="counters">
                <span className="days"> <h4>{this.props.seconds}</h4>  </span>
                <p className="c-t">Seconds</p>
            </div>
        </div>
        )
    }
}

export default Countdown
