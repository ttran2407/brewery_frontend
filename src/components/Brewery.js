import React, { Component } from 'react';

class Brewery extends Component {
    state = {  }


    render() { 
        
        return (
            {this.props.brewery.name}
          );
    }
}
 
export default Brewery;