/*global styles, colors*/
import React, { Component } from "react";
import { FaRegIdCard, FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { MediaQuery, Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

import Base from "../../components/Base";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";

import Legal from "../Legal";

export default class Login extends Base {
  static Route = "";

  state = {
    day: "",
    month: "",
    year: "",
    studentId: "",
    idError: false,
    DOBError: false
  };
  renderHeader() {
    return (
      <div
        style={styles()
          .bg(colors.bgBlue)
          .h(150)
          .fullWidth()
          .row()
          .centerall()}
      >
        <div
          style={styles()
            .ftSize(50)
            .ftColor(colors.ftWhite)}
        >
          Registration Kiosk
        </div>
      </div>
    );
  }
  renderInputs() {
    const { idError, DOBError } = this.state;
    return (
      <div
        style={styles()
          .column()
          .container()
          .center()}
      >
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
            placeholder={"Student ID"}
            containerStyle={styles()
              .bg(colors.bgGray)
              .w(600)}
            icon={
              <FaRegIdCard
                style={styles()
                  .size(30)
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
              Please input your student ID.{" "}
            </div>
          )}
        </div>

        <div
          style={styles()
            .column()
            .fullWidth()}
        >
          <DatePicker
            style={styles()
              .ftSize(20)
              .lineH(2)
              .marginv(10)}
            containerStyle={styles()
              .w(600)
              .bg(colors.bgGray)}
            icon={
              <FaRegCalendarAlt
                style={styles()
                  .size(30)
                  .marginr(15)}
              />
            }
            onDayChange={this.onDayChange}
            onMonthChange={this.onMonthChange}
            onYearChange={this.onYearChange}
          />
          {DOBError && (
            <div
              style={styles()
                .ftSize(20)
                .ftColor(colors.ftRed)}
            >
              Please input a valid date.
            </div>
          )}
        </div>
        <Button
          style={styles()
            .fullWidth()
            .pullDown()
            .bg(colors.ftBlue)}
          onClick={this.onNext}
        >
          <div
            style={styles()
              .ftColor(colors.ftWhite)
              .ftSize(40)
              .paddingv(20)}
          >
            Next
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
  onNext() {
    const { day, month, year, studentId } = this.state;
    this.setState({ idError: false, DOBError: false });

    if (!studentId || studentId.length <= 0) {
      this.setState({ idError: true });
    }

    let valid = this.check(year, month, day);
    console.log("-form/src/screens/Login/index.js:159", valid);
    if (valid) {
      this.navigate("legal", Legal.Route);
    } else {
      this.setState({ DOBError: true });
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
              .paddingv(80)}
          >
            <div
              style={styles()
                .ftSize(36)
                .marginb(50)}
            >
              Please enter you student ID and date of birth
            </div>
            {this.renderInputs()}
          </div>
        </div>
      </div>
    );
  }
}
