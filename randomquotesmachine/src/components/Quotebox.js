import React, { Component } from 'react'
import Quote from './Quote'
import Navigate from './Navigate'

export class Quotebox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomText: '',
            randomAuthor: ''
        }



    }
    componentDidMount() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => this.setState({
                randomText: data.content,
                randomAuthor: data.author
            }));
        //console.log(`${data.content} —${data.author}`)

    }

    onClickHandle = () => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => this.setState({
                randomText: data.content,
                randomAuthor: data.author
            }));

    }




    render() {
        return (
            <div className='Quotebox'>
                <Quote
                    qoute={this.state.randomText}
                    author={this.state.randomAuthor}
                />
                <Navigate onClickHandle={this.onClickHandle} />
            </div>

        )
    }
}

export default Quotebox
