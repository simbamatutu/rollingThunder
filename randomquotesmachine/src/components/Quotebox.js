import React, { Component } from 'react'
import Quote from './Quote'
import Navigate from './Navigate'
 
export class Quotebox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomText:'He who puts on the shoe knows best where is pitches1',
            randomAuthor:'Ian D. Smith'
        }      
        
    }

   onClickHandle = ()=>{
        var items=this.props.choosenQoute;
            var rando= Math.floor(Math.random()*(items.length));
             if(items[rando].text == null || items[rando].author == null){
          rando=583;
        }
      
                this.setState({
                    randomText:items[rando].text,
                    randomAuthor:items[rando].author
       });
        
    }
    componentDidMount(){
      /*  var items=this.props.choosenQoute;
        var rando= Math.floor(Math.random()*(items.length));
   
      
            this.setState({
                randomText:items[rando].text,
                randomAuthor:items[rando].author
            })
            */
       
    }
         
 

    render() {
        return (
            <div className='Quotebox'>
                <Quote qoute={this.state.randomText} author={this.state.randomAuthor} />
                <Navigate onClickHandle={this.onClickHandle} />
            </div>
            
        )
    }
}

export default Quotebox
