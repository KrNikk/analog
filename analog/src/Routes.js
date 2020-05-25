import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Times from "./pages/Times";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          {/*   <Route path="/dev" component={Landing} /> */}
          <Route path="/times" component={Times} />
          {/*   <Route path="/recipes" component={Landing} /> */}
        </Switch>
      </Router>
    );
  }
}
