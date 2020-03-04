import React from "react";
import { View } from "react-native";

import BaseComponent from "../Base";

export default class Separator extends BaseComponent {
  render() {
    const { style, vertical, ...rest } = this.props;

    return (
      <View style={vertical ? styles().h("100%") : styles().w("100%")}>
        <View
          style={[
            vertical
              ? styles({
                  flex: 1,
                  borderRightColor: "#E6E6E6",
                  borderRightWidth: 2
                })
              : styles({
                  flex: 1,
                  borderBottomColor: "#E6E6E6",
                  borderBottomWidth: 2
                }),
            style
          ]}
          {...rest}
        />
      </View>
    );
  }
}
