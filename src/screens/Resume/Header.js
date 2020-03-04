import React, { Component } from "react";
import { View } from "react-native";
import { Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

import Text from "../../components/Text";

export default () => {
  return (
    <View
      style={styles()
        .bg(colors.bgBlue)
        .paddingh(27)
        .paddingt(30)
        .paddingb(22)}
    >
      <Text
        style={styles()
          .ftSize(39)
          .marginb(25)
          .ftColor(colors.ftWhite)}
      >
        Tony Chen
      </Text>
      <Text
        style={styles()
          .ftSize(21)
          .ftColor(colors.ftWhite)}
      >
        Front-End Developer
      </Text>
    </View>
  );
};
