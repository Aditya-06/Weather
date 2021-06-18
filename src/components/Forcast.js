import { Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import Map from "./Map";
import { connect } from "react-redux";
import M from "minimatch";

const Weather = () => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 20.6,
    lng: 78.9,
  });

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "35322ec02c2dd0be37a4311cce0e71b7",
    lat: 12.348722,
    lon: 19.237361,
    lang: "en",
    unit: "metric",
  });

  return (
    <Grid container justify="space-around" md={6} sm={1}>
      <Grid item style={{ width: "40%" }}>
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          showForecast={true}
        />
      </Grid>
      <Grid item style={{ width: "40%" }}>
        <Paper>
          <div id="mapid">
            <Map markerPosition={markerPosition} />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default connect()(Weather);
