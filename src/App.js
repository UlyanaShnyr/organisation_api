import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Home from "./components/layout/Home";
import Organisations from "./components/organisation/Organisations";
import Users from "./components/users/Users";
import Error from "./components/layout/Error";
import Navigation from "./components/layout/Navigation";

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/organisations" component={Organisations} exact />
          <Route path="/users" component={Users} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }

}
export default App;


