import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import "./style/bootstrap.min.css";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";

import Styles from "./style";
import Colors from "./style/colors";

window.styles = s => new Styles(s);
window.colors = Colors;

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
