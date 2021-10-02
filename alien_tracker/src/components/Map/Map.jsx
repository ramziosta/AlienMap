
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import EventDetail from '../EventDetail/EventDetail';
import "./Map.css"


class SimpleMap extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDCzvl4xT_f-wV9_AgiIezCIKFTteGzG24'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <EventDetail
              lat={40.955413}
              lng={30.337844}
              text="My Marker"
            />
            <EventDetail
              lat={50.955413}
              lng={30.337844}
              text="ALIEN TRACKER"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default SimpleMap;

