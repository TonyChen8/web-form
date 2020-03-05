/* global styles */
import React, { Component } from "react";

export default class DatePicker extends Component {
  render() {
    const {
      style = {},
      containerStyle = {},
      icon,
      onDayChange,
      onMonthChange,
      onYearChange,
      ...rest
    } = this.props;

    let inputStyle = {
      ...styles({ textAlign: "center" })
        .bg("transparent")
        .border(0)
        .w("30%")
        .paddingh(10)
        .h(20)
        .ftSize(20),
      ...style
    };

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
        <input
          type="number"
          placeholder="DD"
          style={inputStyle}
          {...rest}
          onChange={onDayChange}
        />
        <div
          style={styles()
            .ftSize(20)
            .marginh(15)}
        >
          /
        </div>
        <input
          type="number"
          placeholder="MM"
          style={inputStyle}
          {...rest}
          onChange={onMonthChange}
        />
        <div
          style={styles()
            .ftSize(20)
            .marginh(15)}
        >
          /
        </div>
        <input
          type="number"
          placeholder="YYYY"
          style={inputStyle}
          {...rest}
          onChange={onYearChange}
        />
      </div>
    );
  }
}
