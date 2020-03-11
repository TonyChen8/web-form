/*global styles, colors*/
import React from "react";

import Base from "../../components/Base";
import Button from "../../components/Button";

import Login from "../Login";

const timeout = 10;
export default class Confirm extends Base {
  static Route = "confirm";

  constructor(props) {
    super(props);
    this.timer = null;
    this.state = { time: timeout };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
      if (this.state.time <= 1) {
        this.stopTimer();
        this.onClose();
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  stopTimer() {
    this.timer && clearInterval(this.timer);
    this.timer = null;
  }

  renderHeader() {
    return (
      <div
        style={styles()
          .bg(colors.bgBlue)
          .column()
          .centerall()
          .h(100)
          .marginb(30)}
      >
        <div
          style={styles()
            .ftSize(30)
            .ftColor(colors.ftWhite)}
        >
          Congratulations, your on your way
        </div>
      </div>
    );
  }

  renderMessage() {
    return (
      <div
        style={styles()
          .container()
          .column()
          .centerall()}
      >
        <div
          style={styles()
            .ftSize(40)
            .column()
            .centerall()}
        >
          <div>A link has been sent to you</div>
          <div>with details about todays event.</div>
        </div>
      </div>
    );
  }
  renderClose() {
    const { time } = this.state;

    return (
      <div
        style={styles()
          .row()
          .w(600)
          .marginb(30)}
      >
        <Button
          style={styles()
            .pullRight()
            .w(200)
            .bg(colors.ftBlue)}
          onClick={() => this.onClose()}
        >
          <div
            style={styles()
              .ftColor(colors.ftWhite)
              .ftSize(30)
              .paddingv(15)}
          >
            Close ({time})
          </div>
        </Button>
      </div>
    );
  }

  onClose() {
    this.navigate(Login.Route);
  }

  render() {
    return (
      <div
        style={styles()
          .fullHeight()
          .column()}
      >
        {this.renderHeader()}
        {this.renderMessage()}
        <div
          style={styles()
            .column()
            .center()
            .marginb(30)}
        >
          {this.renderClose()}
        </div>
      </div>
    );
  }
}
