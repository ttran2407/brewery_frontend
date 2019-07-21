import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Icon} from 'semantic-ui-react'



const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const PinComponent = () =><Icon size="huge" color="red" name="map marker" /> ;


class Map extends Component {
    state = {  }
    static defaultProps = {
        center: {
          lat: 40.02,
          lng: -80.30
        },
        zoom: 16
    };
    render() { 
        let actualCenter = {lat: parseFloat(this.props.brewery.latitude),lng: parseFloat(this.props.brewery.longitude)}

        // console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
        // console.log(actualCenter)
        // console.log(this.props.brewery.latitude)
        // console.log(this.props.brewery.longitude)

        return (
            <div style={{ height: '60vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_API_KEY}}
                    defaultCenter={this.props.center}
                    center={actualCenter}
                    defaultZoom={this.props.zoom}
        >
                    <PinComponent
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