import React, { Component } from "react";
import { View } from "react-native";

import { Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

import Text from "../../components/Text";
import Separator from "../../components/Separator";

const boldStyle = () =>
  styles()
    .bold()
    .ftSize(19);

const DateRange = () => {
  return (
    <View style={styles().w(130)}>
      <Text style={boldStyle()}>JUL-2005 -</Text>
      <Text style={boldStyle()}>SEP-2001</Text>
    </View>
  );
};
const EducationDetails = () => {
  return (
    <View style={styles().span(1)}>
      <Text style={boldStyle()}>Bachelor of Computer Science and Technology</Text>
      <Text
        style={styles()
          .ftSize(16)
          .marginb(15)
          .italic()}
      >
        Wuhan University of Technology, Wuhan, China
      </Text>
    </View>
  );
};

export default () => {
  return (
    <View style={styles()}>
      <Text
        style={styles()
          .bold()
          .marginb(5)}
      >
        Education:
      </Text>
      <Separator style={styles().marginb(25)}></Separator>

      <View style={styles().row()}>
        <DateRange></DateRange>
        <EducationDetails></EducationDetails>
      </View>
    </View>
  );
};
