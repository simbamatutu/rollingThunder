import React from 'react'


class Quote extends React.Component{
     
    render(){
        console.log(this.props.Acquote);
        return(
        <React.Fragment>
        <p className='Acquote'>{this.props.qoute.Acquote}</p>
        <span className='authour'> - {this.props.qoute.author}</span>        
        </React.Fragment>
            
        );

    }
};

export default Quote;