import React, { Component } from 'react';

class Brewery extends Component {
    state = {  }


    render() { 
        
        return (
            <div>{this.props.brewery.name}</div>
            
          );
    }
}
 
export default Brewery;