import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Home.scss";

import Country from "../../components/Country";
import Lower from "../../layout/Lower";

export default class Home extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid style={{ margin: "2rem", width: "100%" }} item>
          <div>
            <Country />
            <Lower />
          </div>
        </Grid>
      </Grid>
    );
  }
}
