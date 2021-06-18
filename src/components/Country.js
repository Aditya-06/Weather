import React, { Component } from "react";
import Select from "react-select";
import csc from "country-state-city";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";

class Countries extends Component {
  state = {
    countries: csc.getAllCountries(),
    selectedOption: null,
    items: {},
    dropdown: {},
    isLoaded: false,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);

    let config = {
      method: "get",
      url: `http://api.weatherapi.com/v1/current.json?key=df3ab929c6aa4ad0953153113211806&q=${selectedOption.value}`,
      headers: {},
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        this.setState({ items: response.data, isLoaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    // console.log(this.state.countries);
    const dropdownList = this.state.countries.map((city) => {
      return {
        value: city.name,
        lat: city.latitude,
        lng: city.longitude,
        iso: city.isoCode,
        label: city.name,
      };
    });
    // console.log(dropdownList);
    this.setState({ dropdown: dropdownList });
  }

  render() {
    const { error, isLoaded, items, dropdown } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <Grid container justify="center" style={{ margin: "3rem" }}>
          <Grid item style={{ width: "80%" }}>
            <Select
              value={this.selectedOption}
              onChange={this.handleChange}
              options={dropdown}
            />
            <Paper
              elevation={3}
              style={{ flex: "wrap", minHeight: "10rem", margin: "1rem" }}
            >
              <p style={{ wordWrap: "break-word" }}>Get weather here</p>
            </Paper>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container justify="center" style={{ margin: "3rem" }}>
          <Grid item style={{ width: "80%" }}>
            <h4>countries</h4>
            <Select
              value={this.selectedOption}
              onChange={this.handleChange}
              options={dropdown}
            />
            <Paper
              elevation={3}
              style={{ flex: "wrap", minHeight: "10rem", margin: "1rem" }}
            >
              <p style={{ wordWrap: "break-word" }}>
                {JSON.stringify(items.current)}
              </p>
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
}

export default Countries;
