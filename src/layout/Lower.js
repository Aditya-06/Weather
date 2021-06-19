import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import Map from "../components/Map";
import { connect } from "react-redux";
import Forcast from "../components/Forcast";

class Lower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPosition: {
        lat: this.props.location[0],
        lng: this.props.location[1],
      },
    };
  }

  render() {
    return (
      <div>
        <Grid container justify="space-around">
          <Grid item style={{ width: "40%" }}>
            <Forcast name={this.props.country} location={this.props.location} />
          </Grid>
          <Grid item style={{ width: "40%" }}>
            <Paper>
              <div id="mapid">
                <Map markerPosition={this.state.markerPosition} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = function (props) {
  return {
    country: props.CountryReducer,
    location: props.LocationReducer,
  };
};

export default connect(mapStateToProps)(Lower);
