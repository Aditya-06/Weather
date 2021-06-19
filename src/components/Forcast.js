import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";

const Forcast = ({ location = [12.348722, 19.237361], name = "India" }) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "35322ec02c2dd0be37a4311cce0e71b7",
    lat: location[0],
    lon: location[1],
    lang: "en",
    unit: "metric",
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      locationLabel={name}
      lang="en"
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      showForecast={true}
    />
  );
};

export default Forcast;
