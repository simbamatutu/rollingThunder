import React, { Component } from 'react'
 
import ShareButton from 'react-social-share-buttons'
export class Extras extends Component {


    render() {
  
        return (
            <React.Fragment>
                <div  style={{       
                float: 'left',
                marginTop: '20px'
                }}>
                <ShareButton
                    compact
                    socialMedia={'facebook'}
                    url={"https://xkcd.com/1024/"}
                    media={"https://imgs.xkcd.com/comics/error_code.png"}
                    text="Sit by a lake"
                    style={{display:'inline-block'}}
                    />           
                </div>

                <div className="btns" style={{       
                float: 'right',
                marginTop: '30px',
                right:'0'

                }}>
                <button 
                 class="btn">
                 <i class="fa fa-home">
                 </i>
                </button>

                <button 
                 class="btn">
                 <i class="fa fa-address-book">
                 </i>
                </button>
                     
                </div>
             
            </React.Fragment>
        )
    }
}

export default Extras