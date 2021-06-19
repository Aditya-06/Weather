import React from "react";
import L from "leaflet";
import { connect } from "react-redux";

const style = {
  width: "100%",
  height: "20rem",
};

class Map extends React.Component {
  componentDidMount() {
    // create map

    console.log(`Inside The map Component ${this.props.location}`);
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

    // add marker
    this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }
  componentDidUpdate({ markerPosition }) {
    this.map.setView(
      new L.LatLng(this.props.location[0], this.props.location[1]),
      8
    );
    // check if position has changed
    if (this.props.markerPosition !== markerPosition) {
      this.marker.setLatLng(this.props.markerPosition);
    }
  }
  render() {
    return <div id="map" style={style} />;
  }
}

const mapStateToProps = function (props) {
  return {
    country: props.CountryReducer,
    location: props.LocationReducer,
  };
};

export default connect(mapStateToProps)(Map);

// import React, { useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   CircleMarker,
//   ZoomControl,
// } from "react-leaflet";

// const DEFAULT_LATITUDE = 19.076;
// const DEFUALT_LONGITUDE = 72.8777;

// function LocMap(props) {
//   const pickUp = props.pU;

//   const [map, setMap] = useState();

//   const saveMap = (map) => {
//     setMap(map);
//   };

//   const longitude = pickUp ? pickUp.lng : DEFUALT_LONGITUDE;
//   const latitude = pickUp ? pickUp.lat : DEFAULT_LATITUDE;

//   return (
//     <React.Fragment>
//       <MapContainer
//         center={[latitude, longitude]}
//         zoom={12}
//         ref={saveMap}
//         zoomControl={false}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <ZoomControl position="bottomright" />

//         <React.Fragment>
//           <CircleMarker center={[latitude, longitude]} radius={80} />
//         </React.Fragment>
//       </MapContainer>
//     </React.Fragment>
//   );
// }

// export default LocMap;
