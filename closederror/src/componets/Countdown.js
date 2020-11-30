import React from 'react'

export default function Countdown() {
    return (
        <div className='countdown'>
            <div className="counters">
                <span className="days"> <h4>00</h4>  </span>
                <p className="c-t"> Days </p>
            </div>

            <div className="counters">
                <span className="days"> <h4>00</h4>  </span>
                <p className="c-t">Hours</p>
            </div>

            <div className="counters">
                <span className="days"> <h4>00</h4>  </span>
                <p className="c-t">Minutes</p>
            </div>

            <div className="counters">
                <span className="days"> <h4>00</h4>  </span>
                <p className="c-t">Seconds</p>
            </div>
        </div>
    )
}
