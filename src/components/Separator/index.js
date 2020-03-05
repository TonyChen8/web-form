/* global styles */
import React from "react";

import BaseComponent from "../Base";

export default class Separator extends BaseComponent {
  render() {
    const { style, vertical, ...rest } = this.props;

    return (
      <div
        style={
          vertical
            ? styles()
                .h("100%")
                .w(2)
            : styles()
                .w("100%")
                .h(2)
        }
      >
        <div
          style={{
            ...(vertical
              ? styles({
                  flex: 1,
                  borderRightColor: "#E6E6E6",
                  borderRightStyle: "solid",
                  borderRightWidth: 2,
                })
              : styles({
                  flex: 1,
                  borderBottomColor: "#E6E6E6",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 2,
                })),
            ...style
          }}
          {...rest}
        />
      </div>
    );
  }
}
