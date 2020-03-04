/*global styles, colors*/
import React, { Component } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MediaQuery, Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

import Base from "../../components/Base";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";

export default class Legal extends Base {
  static Route = "legal";

  state = {
    day: "",
    month: "",
    year: "",
    studentId: "",
    idError: false,
    confirmError: false
  };
  renderHeader() {
    return (
      <div
        style={styles()
          .bg(colors.bgBlue)
          .h(150)
          .row()
          .centerall()}
      >
        <div
          style={styles()
            .ftSize(30)
            .ftColor(colors.ftWhite)}
        >
          Welcome GRADUATE NAME to EVENT NAME
        </div>
      </div>
    );
  }
  renderInputs() {
    const { idError, confirmError } = this.state;
    return (
      <div
        style={styles()
          .w(600)
          .column()
          .container()
          .center()}
      >
        <div
          style={styles()
            .column()
            .fullWidth()
            .marginb(20)}
        >
          <Input
            style={styles()
              .ftSize(20)
              .lineH(2)
              .marginv(10)}
            placeholder={"Mobile Phone"}
            containerStyle={styles()
              .bg(colors.bgGray)
              .w(600)}
            icon={
              <FaMobileAlt
                style={styles()
                  .size(40)
                  .marginr(15)}
              />
            }
            onChange={this.onIDChange}
          />
          {idError && (
            <div
              style={styles()
                .ftSize(20)
                .ftColor(colors.ftRed)}
            >
              Please input your phone number.
            </div>
          )}
        </div>

        <div
          style={styles()
            .column()
            .fullWidth()
            .marginb(40)}
        >
          <Input
            style={styles()
              .ftSize(20)
              .lineH(2)
              .marginv(10)}
            placeholder={"Confirm Mobile Phone"}
            containerStyle={styles()
              .bg(colors.bgGray)
              .w(600)}
            icon={
              <FaMobileAlt
                style={styles()
                  .size(40)
                  .marginr(15)}
              />
            }
            onChange={this.onIDChange}
          />
          {confirmError && (
            <div
              style={styles()
                .ftSize(20)
                .ftColor(colors.ftRed)}
            >
              Please confirm your phone number.
            </div>
          )}
        </div>

        <Button
          style={styles()
            .fullWidth()
            .bg(colors.ftBlue)}
          onClick={this.onContinue}
        >
          <div
            style={styles()
              .ftColor(colors.ftWhite)
              .ftSize(40)
              .paddingv(10)}
          >
            Continue
          </div>
        </Button>
      </div>
    );
  }

  renderHelp() {
    return (
      <div
        style={styles()
          .row()
          .paddingh(80)
          .fullWidth(0)}
      >
        <Button style={styles().pullRight()}>
          <div
            style={styles()
              .ftSize(20)
              .ftColor(colors.ftBlue)}
          >
            Help, I do not have a mobile phone
          </div>
        </Button>
      </div>
    );
  }
  onIDChange(event) {
    this.setState({ studentId: event.target.value });
  }
  onDayChange(event) {
    this.setState({ day: event.target.value });
  }
  onMonthChange(event) {
    this.setState({ month: event.target.value });
  }
  onYearChange(event) {
    this.setState({ year: event.target.value });
  }

  checkNumber(value) {
    if (!value || value.length <= 0) return false;
    var numbers = /^[0-9]+$/;
    return value.match(numbers);
  }

  check(year, month, day) {
    if (!this.checkNumber(year)) {
      return false;
    }
    if (!this.checkNumber(month)) {
      return false;
    }
    if (!this.checkNumber(day)) {
      return false;
    }

    let date = `${year}-${month}-${day}`;
    return new Date(date).getDate() == day.toString();
  }
  onContinue() {
    const { day, month, year, studentId } = this.state;
    this.setState({ idError: false, confirmError: false });

    if (!studentId || studentId.length <= 0) {
      this.setState({ idError: true });
    }

    let valid = this.check(year, month, day);
    console.log("-form/src/screens/Login/index.js:159", valid);
    if (valid) {
      this.navigate();
    } else {
      this.setState({ confirmError: true });
    }
  }

  render() {
    return (
      <div
        style={styles()
          .container()
          .column()
          .fullHeight()
          .bg(colors.bgGray)
          .centerall()}
      >
        <div
          style={styles()
            .h(768)
            .w(1024)
            .column()
            .container()
            .bg(colors.bgWhite)}
        >
          {this.renderHeader()}

          <div
            style={styles()
              .container()
              .column()
              .center()
              .paddingh(10)
              .paddingv(30)}
          >
            <div
              style={styles()
                .ftSize(36)
                .marginb(20)}
            >
              Please enter your mobile phone number
            </div>
            <div
              className="alert alert-warning"
              style={styles()
                .ftSize(20)
                .w(700)
                .marginb(30)}
            >
              NOTE - You must have access to this device so you can retrieve your event
              ticket and receive other information about todays event.﻿
            </div>

            {this.renderInputs()}
            {this.renderHelp()}
          </div>
        </div>
      </div>
    );
  }
}
