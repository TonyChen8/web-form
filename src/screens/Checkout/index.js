/*global styles, colors*/
import React from "react";

import Base from "../../components/Base";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";

import Confirm from "../Confirm";
import Guard from "../Guard";

import Student from "../../models/student";

const timeout = 30;
export default class Checkout extends Base {
  static Route = "checkout";

  constructor(props) {
    super(props);

    this.state = {
      securityCode: "",
      confirmedNumber: "",
      codeError: false,
      confirmError: false,
      time: timeout
    };
    this.timer = null;
  }

  componentDidMount() {
    this.pub(Guard.Messages.Reset);
  }
  componentDidUpdate() {
    this.pub(Guard.Messages.Reset);
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
          Checkout
        </div>
      </div>
    );
  }

  renderMessage() {
    return (
      <div
        style={styles()
          .column()
          .center()
          .paddingh(20)
          .marginb(10)}
      >
        <div
          style={styles()
            .ftSize(30)
            .marginb(20)}
        >
          Please enter the code you have just received by text.
        </div>
      </div>
    );
  }
  renderInputs() {
    const { codeError, confirmError, time } = this.state;
    let student = Student.get();
    return (
      <div
        style={styles()
          .column()
          .w(600)
          .marginb(50)}
      >
        {codeError && (
          <div
            style={styles()
              .ftSize(20)
              .ftColor(colors.ftRed)}
          >
            Please input your code.
          </div>
        )}
        {confirmError && (
          <div
            style={styles()
              .ftSize(20)
              .ftColor(colors.ftRed)}
          >
            Your code is invalid.
          </div>
        )}
        <Input
          style={styles()
            .ftSize(20)
            .paddingv(5)
            .marginv(10)}
          placeholder={"Code"}
          containerStyle={styles()
            .bg(colors.bgGray)
            .marginb(60)}
          onChange={this.onCodeChange}
        />
        <Button
          style={{
            ...styles()
              .fullWidth()
              .paddingv(10)
              .bg(colors.ftBlue),
            ...(time < timeout ? styles().fade(0.5) : {})
          }}
          onClick={this.onResend}
          disabled={time < timeout}
        >
          <div
            style={styles()
              .ftColor(colors.ftWhite)
              .ftSize(30)}
          >
            <div style={styles()}>Resend confirmation code to</div>
            <div style={styles()}>
              {student.getPhone()} {time < timeout ? `in ${time}s` : ""}
            </div>
          </div>
        </Button>
      </div>
    );
  }

  onResend() {
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
      if (this.state.time < 1) {
        this.stopTimer();
        this.setState({ time: timeout });
      }
    }, 1000);
  }

  renderNextButton() {
    return (
      <div
        style={styles()
          .row()
          .w(600)
          .marginb(30)}
      >
        <Button
          style={styles()
            .w(200)
            .marginr(80)
            .bg(colors.ftBlue)}
          onClick={() => this.navigateBack()}
        >
          <div
            style={styles()
              .ftColor(colors.ftWhite)
              .ftSize(30)
              .paddingv(15)}
          >
            Back
          </div>
        </Button>
        <Button
          style={styles()
            .pullRight()
            .w(200)
            .bg(colors.ftBlue)}
          onClick={this.onCheckIn}
        >
          <div
            style={styles()
              .ftColor(colors.ftWhite)
              .ftSize(30)
              .paddingv(15)}
          >
            Check In
          </div>
        </Button>
      </div>
    );
  }

  onCodeChange(event) {
    this.setState({ securityCode: event.target.value });
  }

  async onCheckIn() {
    const { securityCode } = this.state;
    this.setState({ codeError: false, confirmError: false });

    if (!securityCode || securityCode.length <= 0) {
      this.setState({ codeError: true });
      return;
    }

    try {
      this.pub(Spinner.Messages.Show, { show: true });

      let student = Student.get();
      let res = await student.matchVerifyCode(securityCode);
      this.pub(Spinner.Messages.Show, { show: false });

      if (res) {
        this.navigate(Confirm.Route);
      } else {
        this.setState({ confirmError: true });
      }
    } catch (e) {
      alert(e);
    }
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
            .container()
            .column()
            .center()}
        >
          {this.renderInputs()}
        </div>
        <div
          style={styles()
            .column()
            .center()
            .marginb(30)}
        >
          {this.renderNextButton()}
        </div>
      </div>
    );
  }
}
