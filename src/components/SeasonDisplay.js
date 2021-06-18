import React from "react";

class SeasonDisplay extends React.Component {
  render() {
    const { country } = this.props;
    return (
      <div>
        <h2>{country}</h2>
      </div>
    );
  }
}

export default SeasonDisplay;
