/* global styles */
import React, { Component } from "react";

export default class InputBox extends Component {
  render() {
    const { style = {}, containerStyle = {}, icon, ...rest } = this.props;

    return (
      <div
        style={{
          ...styles()
            .row()
            .fullWidth()
            .paddingh(25)
            .h(55)
            .w("50%")
            .center(),
          ...containerStyle
        }}
      >
        {icon && icon}
        <input
          type="text"
          style={{
            ...styles()
              .bg("transparent")
              .border(0)
              .paddingh(10)
              .h(20)
              .fullWidth()
              .ftSize(12),
            ...style
          }}
          {...rest}
        />
      </div>
    );
  }
}
