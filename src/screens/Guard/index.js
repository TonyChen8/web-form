/*global styles, colors*/
import React from "react";
import { Modal } from "reactstrap";
import { withRouter } from "react-router";

import Base from "../../components/Base";
import Button from "../../components/Button";
import Separator from "../../components/Separator";

import Login from "../Login";

const timeout = 10;
const expiredTime = 60 * 2;
class Guard extends Base {
  static Messages = { Reset: "MSG.Guard.TimeReset" };

  constructor(props) {
    super(props);
    this.sub(Guard.Messages.Reset, this.onReset);
    this.timer = null;
    this.expiredTimer = null;
    this.state = { time: timeout, show: false };
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    this.stopTimer();
  }

  onReset() {
    this.stopTimer();
    this.expiredTimer = setTimeout(() => {
      this.setState({ show: true, time: timeout });
      this.startCountDown();
    }, expiredTime * 1000);
  }

  startCountDown() {
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
      if (this.state.time < 1) {
        this.stopTimer();
        this.onNavigateToHome();
      }
    }, 1000);
  }

  stopTimer() {
    this.timer && clearInterval(this.timer);
    this.timer = null;
    this.expiredTimer && clearTimeout(this.expiredTimer);
    this.expiredTimer = null;
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

  onNavigateToHome() {
    this.setState({ show: false });
    this.stopTimer();
    this.navigate(Login.Route);
  }

  onToggle() {
    this.setState({ show: !this.state.show });
    this.onReset();
  }

  render() {
    const { show, time } = this.state;
    return (
      <Modal
        isOpen={show}
        toggle={this.onToggle}
        style={styles()
          .fullHeight()
          .marginv(0)
          .column()
          .centerall()}
      >
        <div
          style={styles()
            .bg(colors.bgBlue)
            .h(50)
            .row()
            .fullWidth()
            .center()
            .paddingh(20)}
        />
        <Separator />
        <div
          style={styles()
            .paddingh(30)
            .paddingv(30)}
        >
          <div
            style={styles()
              .ftSize(24)
              .marginb(30)}
          >
            You session will be expired in {time} second.
          </div>

          <div style={styles().row()}>
            <Button
              style={styles()
                .bg(colors.bgBlue)
                .pullRight()}
              onClick={this.onToggle}
            >
              <div
                style={styles()
                  .ftSize(24)
                  .ftColor(colors.ftWhite)}
              >
                Continue
              </div>
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default withRouter(Guard);
