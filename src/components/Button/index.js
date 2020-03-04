/* global styles */
import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { style = {}, children, ...rest } = this.props;
    return (
      <button
        type="button"
        className="button"
        style={{
          ...styles()
            .bg("transparent")
            .cursor()
            .border(0),
          ...style
        }}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
