/*global styles, colors*/
import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";

import { Modal } from "reactstrap";

import Base from "../../components/Base";
import Button from "../../components/Button";
import PhoneNumber from "../../components/PhoneNumber";
import Separator from "../../components/Separator";
import Spinner from "../../components/Spinner";

import Checkout from "../Checkout";
import Guard from "../Guard";

import Student from "../../models/student";

const HelpButton = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div
      style={styles()
        .row()
        .w(600)
        .marginb(15)}
    >
      <Button style={styles().pullRight()} onClick={toggle}>
        <div
          style={styles()
            .ftSize(20)
            .ftColor(colors.ftBlue)}
        >
          Help, I do not have a mobile phone
        </div>
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        style={styles()
          .fullHeight()
          .marginv(0)
          .column()
          .centerall()}
      >
        <div
          style={styles()
            .bg(colors.bgBlue)
            .row()
            .fullWidth()
            .center()
            .paddingh(10)}
        >
          <Button
            style={styles()
              .paddingh(10)
              .ftSize(30)
              .pullRight()}
            onClick={toggle}
          >
            <div
              style={styles()
                .ftSize(30)
                .ftColor(colors.ftWhite)}
            >
              X
            </div>
          </Button>
        </div>
        <Separator />
        <div
          style={styles()
            .paddingh(30)
            .paddingv(30)}
        >
          <div style={styles().ftSize(24)}>
            Please visit one of our staff members at the registration desk.
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default class Legal extends Base {
  static Route = "legal";

  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: "",
      confirmedNumber: "",
      country: "61",
      confirmedCountry: "61",
      phoneError: false,
      confirmError: false
    };
  }

  componentDidMount() {
    this.pub(Guard.Messages.Reset);
  }
  componentDidUpdate() {
    this.pub(Guard.Messages.Reset);
  }

  renderHeader() {
    let student = Student.get();
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
          {`Welcome ${student.getName()} ${student.getLastname()} to`}
        </div>
        <div
          style={styles()
            .ftSize(20)
            .ftColor(colors.ftWhite)}
        >
          {student.getCeremonyName()}
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
          Please enter your mobile phone number
        </div>
        <div
          className="alert alert-warning"
          style={styles()
            .ftSize(20)
            .w(600)}
        >
          NOTE - You must have access to this device so you can retrieve your event ticket
          and receive other information about todays event.﻿
        </div>
      </div>
    );
  }
  renderInputs() {
    const {
      phoneError,
      confirmError,
      confirmedCountry,
      confirmedNumber,
      country,
      phoneNumber
    } = this.state;
    return (
      <div style={styles().w(600)}>
        {phoneError && (
          <div
            style={styles()
              .ftSize(20)
              .ftColor(colors.ftRed)}
          >
            Please input your phone number.
          </div>
        )}

        <PhoneNumber
          style={styles()
            .ftSize(20)
            .paddingv(5)
            .marginv(10)}
          placeholder={"Mobile Phone ( e.g. 0412345678 )"}
          containerStyle={styles()
            .bg(colors.bgGray)
            .marginb(40)}
          icon={
            <FaMobileAlt
              style={styles()
                .size(40)
                .marginr(15)}
            />
          }
          country={country}
          phoneNumber={phoneNumber}
          onCountryCodeChange={this.onCountryCodeChange}
          onPhoneChange={this.onPhoneChange}
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

        <PhoneNumber
          style={styles()
            .ftSize(20)
            .paddingv(5)
            .marginv(10)}
          placeholder={"Confirm Mobile Phone"}
          containerStyle={styles()
            .bg(colors.bgGray)
            .marginb(20)}
          icon={
            <FaMobileAlt
              style={styles()
                .size(40)
                .marginr(15)}
            />
          }
          country={confirmedCountry}
          phoneNumber={confirmedNumber}
          onCountryCodeChange={this.onConfirmCountryChange}
          onPhoneChange={this.onConfirmNumberChange}
        />
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
          onClick={this.onContinue}
        >
          <div
            style={styles()
              .ftColor(colors.ftWhite)
              .ftSize(30)
              .paddingv(15)}
          >
            Continue
          </div>
        </Button>
      </div>
    );
  }

  onCountryCodeChange(event) {
    this.setState({ country: event.target.value });
  }
  onConfirmCountryChange(event) {
    this.setState({ confirmedCountry: event.target.value });
  }
  onPhoneChange(event) {
    this.setState({ phoneNumber: event.target.value });
  }
  onConfirmNumberChange(event) {
    this.setState({ confirmedNumber: event.target.value });
  }

  async onContinue() {
    const { country, phoneNumber, confirmedCountry, confirmedNumber } = this.state;
    this.setState({ phoneError: false, confirmError: false });

    if (!phoneNumber || phoneNumber.length <= 0) {
      this.setState({ phoneError: true });
      return;
    }
    if (
      !confirmedNumber ||
      confirmedNumber.length <= 0 ||
      phoneNumber !== confirmedNumber ||
      country !== confirmedCountry
    ) {
      this.setState({ confirmError: true });
      return;
    }

    try {
      this.pub(Spinner.Messages.Show, { show: true });
      let student = Student.get();
      student.setCountryCode(country);
      student.setPhone(phoneNumber);
      let res = await student.getVerifyCode();

      this.pub(Spinner.Messages.Show, { show: false });

      if (res) {
        this.navigate(Checkout.Route);
      } else {
        alert("Send code failed. Please check your phone number and resend again.");
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
            // .container()
            .column()
            .center()}
        >
          {this.renderInputs()}
          <HelpButton />
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
