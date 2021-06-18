import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Home.scss";

import SeasonDisplay from "../../components/SeasonDisplay";
import Country from "../../components/Country";
import Weather from "../../components/Forcast";

export default class Home extends Component {
  state = {
    name: "Aditya",
    age: 20,
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  formHandle = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <Grid container justify="center">
        <Grid style={{ margin: "2rem", width: "100%" }} item>
          <div>
            <Country />
            <Weather />
          </div>
        </Grid>
      </Grid>
    );
  }
}