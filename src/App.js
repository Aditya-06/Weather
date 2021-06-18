import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.scss";
import Header from "./layout/Header";
import Home from "./screens/Home/Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
