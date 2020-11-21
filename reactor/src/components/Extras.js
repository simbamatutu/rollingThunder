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

                <div>
                    <input 
                    type="button" 
                    value=""/>
                </div>
             
            </React.Fragment>
        )
    }
}

export default Extras