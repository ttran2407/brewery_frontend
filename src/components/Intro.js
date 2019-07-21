import React from 'react';
import pic from '../pictures/alcohol-ale-bar-159291.jpg'

const Intro = (props) => {

        return (  
            <div>
                <img style={{"height": "50%", "width": "50%", "display": "block", "margin": "auto"}} src={pic} alt="Intro" />
                <div style={{"fontFamily": "proxima-nova", "color": "white", "fontSize": "16px", "lineHeight": "34px"}}>
                    We are a group of Engineer sharing a same passion with craft beer.
                    We proud to provide 350+ breweries locations across Pensylvania. 
                    We believe a good drink is a key for a happly life. 

                    To find your favorite brewery, simple write the brewery's name (if you know) on the search box above. 
                    The result is display below. 

                    If you don't remember the name. That's fine. Their are 350+ locations in the table below.

                    Happy drinking!
                </div>
            </div>
        );
    }
 
export default Intro;