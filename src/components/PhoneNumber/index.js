/* global styles */
import React, { Component } from "react";

export default class PhoneNumber extends Component {
  render() {
    const {
      style = {},
      containerStyle = {},
      icon,
      onCountryCodeChange,
      country,
      phoneNumber,
      onPhoneChange,
      placeholder,
      ...rest
    } = this.props;

    return (
      <div
        style={{
          ...styles()
            .row()
            .container()
            .fullWidth()
            .center()
            .h(55)
            .paddingh(25),
          ...containerStyle
        }}
      >
        {icon && icon}
        <div style={styles().ftSize(20)}>+</div>
        <input
          type="number"
          placeholder="Country"
          style={{
            ...styles({ textAlign: "center" })
              .bg("transparent")
              .border(0)
              .w("15%")
              .paddingh(10)
              .h(20)
              .ftSize(20),
            ...style
          }}
          disabled={true}
          value={country}
          {...rest}
          onChange={onCountryCodeChange}
        />
        <div
          style={styles()
            .ftSize(20)
            .marginh(15)}
        >
          -
        </div>
        <input
          type="number"
          placeholder={placeholder}
          style={{
            ...styles()
              .bg("transparent")
              .border(0)
              .w("70%")
              .paddingh(10)
              .h(20)
              .ftSize(20),
            ...style
          }}
          value={phoneNumber}
          {...rest}
          onChange={onPhoneChange}
        />
      </div>
    );
  }
}
