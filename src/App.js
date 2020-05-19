import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail"
import './App.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/building/:id" component={Detail} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
