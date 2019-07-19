import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


//API Key: AIzaSyD0EhlUwQGyjgVOvJUiG6YD46SU6vXwQI4

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    state = {  }
    static defaultProps = {
        center: {
          lat: 40.02,
          lng: -80.30
        },
        zoom: 11
    };
    render() { 
        console.log(this.props.brewery.latitude)
        console.log(this.props.brewery.longitude)
        return (
            <div style={{ height: '60vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyD0EhlUwQGyjgVOvJUiG6YD46SU6vXwQI4'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
        >
                    <AnyReactComponent
                        lat={this.props.brewery.latitude}
                        lng={this.props.brewery.longitude}
                        text={this.props.brewery.name}
                    />
                </GoogleMapReact>
            </div>
          );
    }
}
 
export default Map;