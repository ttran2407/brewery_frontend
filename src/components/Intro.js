import React from 'react';
import pic from '../pictures/alcohol-ale-bar-159291.jpg'

const Intro = (props) => {

        return (  
            <div>
                <img style={{"height": "50%", "width": "50%", "display": "block", "margin": "auto"}} src={pic} alt="Intro" />
                <div style={{"fontFamily": "proxima-nova", "color": "white", "fontSize": "20px", "lineHeight": "34px"}}>
                    We are a group of Engineer sharing a same passion with craft beer.
                    We proud to provide 350+ breweries locations across Pensylvania. 
                    We believe responsibility drinking is a key for a happly life. 
                </div>
            </div>
        );
    }
 
export default Intro;