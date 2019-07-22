import React from 'react';
import pic from '../pictures/alcohol-ale-bar-159291.jpg'

const Intro = (props) => {

        return (  
            <div className="intro">

                <img className="image" src={pic} alt="Intro" />

                
                    <div className="first">
                        We are a group of Engineers sharing the same passion with craft beer.
                        We're proud to provide 350+ brewery locations across Pennsylvania. 
                    </div>
                    <div className="second">
                        To find your favorite brewery, simply write the brewery's name (if you know) on the search box above. 
                        The result will be displayed below. 
                        If you don't remember the name, that's fine. There are 350+ locations in the table below.
                    </div>
                    <div className="third">
                        We believe a good drink is the key to a happly life. Happy drinking!
                    </div>
                
            </div>
        );
    }
 
export default Intro;


