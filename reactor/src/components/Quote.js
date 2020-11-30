import React from 'react'


class Quote extends React.Component{
     
    render(){
        return(
        <React.Fragment>
        <p className='Acquote'> {this.props.qoute.Acquote}</p>
        <span className='authour'> - {this.props.qoute.author}</span>        
        </React.Fragment>
            
        );

    }
};

export default Quote;