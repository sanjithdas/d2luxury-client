import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <div>
        
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -37.99445,
          lng: 145.240082,
        }}
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_API,
})(MapContainer);
