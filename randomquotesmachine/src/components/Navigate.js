import React, { Component } from 'react'

export default class Navigate extends Component {
    render() {
        return (
            <div className='Navigate'>
            <ul>
                <li onClick={this.props.onClickHandle}><a href="#"><i class="fa fa-refresh" aria-hidden="true"></i></a></li>
                <li><a href="twitter.com/intent/tweet" target='_blank'id='tweet-quote'><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                
           
            </ul>
        </div>
        )
    }
}
