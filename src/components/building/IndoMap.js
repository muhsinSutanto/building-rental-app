import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { withRouter } from 'react-router-dom';

class IndoMap extends Component {
  state = {
    lat: -6.2175,
    lng: 106.8178,
    zoom: 12,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {this.props.buildings.map((item, idx) => (
            <Marker
              onMouseOver={(e) => {
                e.target.openPopup();
              }}
              onClick={() => this.props.buildings.length < 2 ? null : this.props.history.push(`building/${item.id}`)}
              position={[item.address.latitude, item.address.longitude]}
            >
              <Popup>
                <div key={idx}>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </Map>
    );
  }
}

export default withRouter(IndoMap);
