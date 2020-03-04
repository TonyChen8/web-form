import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Login from "../screens/Login";
import Legal from "../screens/Legal";
// import CreditCard from "../screens/CreditCard";
// import Finish from "../screens/Finish";

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
        path: "/legal",
        component: Legal,
        exact: true
      }
      // {
      //   path: "/creditcard",
      //   component: CreditCard,
      //   exact: true
      // },
      // {
      //   path: "/finish",
      //   component: Finish,
      //   exact: true
      // }
    ];
  }

  render() {
    return (
      <Router>
        {this.routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact === true}
            path={route.path}
            component={route.component}
          />
        ))}
      </Router>
    );
  }
}
