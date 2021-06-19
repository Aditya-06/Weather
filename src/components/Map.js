import React from "react";
import L from "leaflet";
import { connect } from "react-redux";

const style = {
  width: "100%",
  height: "20rem",
};

class Map extends React.Component {
  componentDidMount() {
    console.log(`Inside The map Component ${this.props.location}`);

    // Create a map
    this.map = L.map("map", {
      center: this.props.location,
      zoom: 4,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    // add a marker
    this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }

  // Re-center Every time an update has been received
  componentDidUpdate({ markerPosition }) {
    // Recentre
    this.map.setView(
      new L.LatLng(this.props.location[0], this.props.location[1]),
      8
    );
    // check if position has changed
    this.marker.setLatLng({
      lat: this.props.location[0],
      lng: this.props.location[1],
    });
  }
  render() {
    return <div id="map" style={style} />;
  }
}

// component should update
const mapStateToProps = function (props) {
  return {
    location: props.LocationReducer,
  };
};

export default connect(mapStateToProps)(Map);
