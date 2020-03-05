/*global styles, colors*/
import React from "react";
import { FaRegIdCard, FaRegCalendarAlt } from "react-icons/fa";

import Base from "../../components/Base";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";

import Legal from "../Legal";

export default class Login extends Base {
  static Route = "/";

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
          .column()
          .centerall()
          .h(100)
          .marginb(30)}
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

  renderMessage() {
    return (
      <div
        style={styles()
          .column()
          .center()
          .ftSize(36)
          .marginb(50)}
      >
        Please enter you student ID and date of birth
      </div>
    );
  }

  renderInputs() {
    const { idError, DOBError } = this.state;

    return (
      <div style={styles().w(600)}>
        {idError && (
          <div
            style={styles()
              .ftSize(20)
              .marginb(10)
              .ftColor(colors.ftRed)}
          >
            Please input your student ID.
          </div>
        )}
        <Input
          style={styles()
            .ftSize(20)
            .paddingv(5)
            .marginv(10)}
          placeholder={"Student ID"}
          containerStyle={styles()
            .bg(colors.bgGray)
            .marginb(40)}
          icon={
            <FaRegIdCard
              style={styles()
                .size(30)
                .marginr(15)}
            />
          }
          onChange={this.onIDChange}
        />

        {DOBError && (
          <div
            style={styles()
              .ftSize(20)
              .ftColor(colors.ftRed)}
          >
            Please input a valid date.(e.g. 31/01/2020)
          </div>
        )}
        <DatePicker
          style={styles()
            .ftSize(20)
            .lineH(2)}
          containerStyle={styles()
            .bg(colors.bgGray)
            .marginb(100)}
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
      </div>
    );
  }

  renderNextButton() {
    return (
      <div
        style={styles()
          .w(600)
          .marginb(30)}
      >
        <Button
          style={styles()
            .fullWidth()
            .bg(colors.ftBlue)}
          onClick={this.onNext}
        >
          <div
            style={styles()
              .ftColor(colors.ftWhite)
              .ftSize(30)
              .paddingv(15)}
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
    if (!this.checkNumber(year) || year.length !== 4) {
      return false;
    }
    if (!this.checkNumber(month)) {
      return false;
    }
    if (!this.checkNumber(day)) {
      return false;
    }

    let date = `${year}-${month}-${day}`;
    return new Date(date).getDate().toString() === day.toString();
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
          .column()
          .fullHeight()}
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
            .row()
            .centerall()
            .marginb(30)}
        >
          {this.renderNextButton()}
        </div>
      </div>
    );
  }
}
