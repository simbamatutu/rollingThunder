import React from 'react'

export default function Countdown() {
    return (
        <div className='countdown'>
            <div className="counters">
                <span className="days"> 00  </span>
                Days
            </div>

            <div className="counters">
                <span className="days"> 00  </span>
                Hours
            </div>

            <div className="counters">
                <span className="days"> 00  </span>
                Minutes
            </div>

            <div className="counters">
                <span className="days"> 00  </span>
                Seconds
            </div>
        </div>
    )
}
