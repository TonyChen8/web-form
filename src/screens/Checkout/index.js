/*global styles, colors*/
import React from "react";

import Base from "../../components/Base";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Confirm from "../Confirm";

export default class Checkout extends Base {
  static Route = "checkout";

  state = {
    securityCode: "",
    confirmedNumber: "",
    codeError: false,
    confirmError: false
  };

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
          .marginb(10)}
      >
        <div
          style={styles()
            .ftSize(36)
            .marginb(20)}
        >
          Please enter the code you have just received by text.
        </div>
      </div>
    );
  }
  renderInputs() {
    const { codeError, confirmError } = this.state;
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
          style={styles()
            .fullWidth()
            .paddingv(10)
            .bg(colors.ftBlue)}
          // onClick={}
        >
          <div
            style={styles()
              .ftColor(colors.ftWhite)
              .ftSize(30)}
          >
            <div style={styles()}>Resend confirmation code to</div>
            <div style={styles()}>0417749507</div>
          </div>
        </Button>
      </div>
    );
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

  onCheckIn() {
    const { securityCode } = this.state;
    this.setState({ codeError: false, confirmError: false });

    if (!securityCode || securityCode.length <= 0) {
      this.setState({ codeError: true });
      return;
    }

    this.setState({ confirmError: true });

    this.navigate(Confirm.Route);
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
