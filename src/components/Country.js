import React, { Component } from "react";
import Select from "react-select";
import csc from "country-state-city";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import { connect } from "react-redux";

import { update_country } from "../redux/actions/CountryActions";
import { update_coordinates } from "../redux/actions/LocationAction";

// Countries Component Containing Drop-down and Capital + coordinates
class Countries extends Component {
  // Set-up Initial States
  constructor(props) {
    super(props);
    this.state = {
      countries: csc.getAllCountries(),
      selectedOption: null,
      items: null,
      dropdown: {},
      isLoaded: false,
    };
  }

  // Handle Different Country Selection
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });

    // Make an Axios call to WeatherAPI
    let config = {
      method: "get",
      url: `http://api.weatherapi.com/v1/current.json?key=df3ab929c6aa4ad0953153113211806&q=${selectedOption.value}`,
      headers: {},
    };

    axios(config)
      .then((response) => {
        // We must Update the states and dispatch Redux Actions for Capital and Coordinates
        this.props.countryUpdate(response.data.location.name);
        this.props.locationUpdate([
          response.data.location.lat,
          response.data.location.lon,
        ]);
        console.log(`location: ${JSON.stringify(this.props.location)}`);
        this.setState({ items: response.data, isLoaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    // Standarize the Drop-down to fit the React-Select Compomenet
    const dropdownList = this.state.countries.map((city) => {
      return {
        value: city.name,
        lat: city.latitude,
        lng: city.longitude,
        iso: city.isoCode,
        label: city.name,
      };
    });
    this.setState({ dropdown: dropdownList });
  }

  render() {
    const { items, dropdown } = this.state;

    return (
      <Grid
        container
        justify="center"
        style={{ margin: "3rem", zIndex: "1000" }}
      >
        <Grid item style={{ width: "80%" }}>
          <h4>
            Capital: {this.props.country} location: {this.props.location}
          </h4>

          <Select
            value={this.selectedOption}
            onChange={this.handleChange}
            options={dropdown}
          />
          <Paper
            elevation={3}
            style={{
              flex: "wrap",
              minHeight: "10rem",
              margin: "1rem",
              padding: "0.5rem",
            }}
          >
            <p style={{ wordWrap: "break-word" }}>
              {items ? (
                <>
                  {`Information: ${JSON.stringify(items.location)}`}
                  <br />
                  Icon:{" "}
                  <img src={items.current.condition.icon} alt="icon"></img>
                </>
              ) : (
                "Select Country to View data"
              )}
            </p>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = function (props) {
  return {
    // Change name
    country: props.CountryReducer,
    location: props.LocationReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countryUpdate: (name) => dispatch(update_country(name)),
    locationUpdate: (latlng) => dispatch(update_coordinates(latlng)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
