import React, { Component } from 'react'

export default class Navigate extends Component {
    render() {
        return (
            <div className='Navigate'>
                <ul style={ulStyle}>
                    <li style={liStyle} onClick={this.props.onClickHandle}>
                        <a href="#" style={aStyle}>
                            <i class="fa fa-refresh" aria-hidden="true" style={{ color: "#000" }}>
                            </i>
                        </a>
                    </li>
                    <li style={liStyle}>
                        <a href="twitter.com/intent/tweet" target='_blank' id='tweet-quote' style={aStyle}>
                            <i className="fa fa-twitter-square" aria-hidden="true" style={{ color: "#00acee" }}></i>
                        </a>
                    </li>
                    <li style={liStyle}>
                        <a href="#" style={aStyle}>
                            <i className="fa fa-facebook-official" aria-hidden="true" style={{ color: "#3b5998" }}></i>
                        </a>
                    </li>


                </ul>
            </div>
        )
    }
}

const ulStyle = {
    position: 'absolute',
    bottom: '0px',
    top: '1.6em',
    right: '1%',
    display: 'flex'
}

const liStyle = {
    position: 'relative',
    listStyle: 'none',
    margin: '1ch 1ch',
    paddingBottom: '1ch'
}

const aStyle = {
    position: 'relative',
    width: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: '2ch',
    height: '10px'
}