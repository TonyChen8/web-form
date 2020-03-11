/*global styles, colors*/
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Login from "../screens/Login";
import Legal from "../screens/Legal";
import Checkout from "../screens/Checkout";
import Confirm from "../screens/Confirm";
import Guard from "../screens/Guard";

import Spinner from "../components/Spinner";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.routes = [
      {
        path: "/",
        component: Login,
        exact: true
      },
      {
        path: "/" + Legal.Route,
        component: Legal,
        exact: true
      },
      {
        path: "/" + Checkout.Route,
        component: Checkout,
        exact: true
      },
      {
        path: "/" + Confirm.Route,
        component: Confirm,
        exact: true
      }
    ];
  }

  render() {
    return (
      <div style={styles().container()}>
        <Router>
          {this.routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact === true}
              path={route.path}
              component={route.component}
            />
          ))}
          <Guard />
        </Router>
        <Spinner />
      </div>
    );
  }
}
