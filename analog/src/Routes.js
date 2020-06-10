import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Times from "./pages/Times";
import TimerPage from "./pages/Timer";
import Processing from './pages/Processing';
import { TimesContext } from "./definitions/Times.context";

export default class Routes extends Component {
  render() {
    return (
    
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/process" component={Processing} />
          <Route path="/times" component={Times} />
          <Route path="/timer" component={TimerPage} />
        </Switch>
      </Router>
    
    );
  }
}
