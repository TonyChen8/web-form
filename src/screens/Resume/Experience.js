import React, { Component } from "react";
import { Platform, ScrollView, View } from "react-native";

import { Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

import Text from "../../components/Text";
import Separator from "../../components/Separator";

import Hyphenio from "./Hyphenio";
import BrightFox from "./BrightFox";
import TCL from "./TCL";
import Moons from "./Moons";
import Education from "./Education";

const Summary = () => {
  return (
    <Text
      style={styles()
        .lineH(20)
        .ftSize(16)
        .marginb(30)}
    >
      Meticulous web developer with over 3 years of front end experience and passion for
      responsive website design and a firm believer in the mobile-first approach. W3C
      certified. Implemented new responsive website approach which increased mobile
      traffic by 20%.
    </Text>
  );
};

const Experience = () => {
  return (
    <View>
      <Text
        style={styles()
          .bold()
          .marginb(5)}
      >
        Experience:
      </Text>
      <Separator style={styles().marginb(25)}></Separator>
      <Hyphenio></Hyphenio>
      <BrightFox></BrightFox>
      <TCL></TCL>
      <Moons></Moons>
      <Education></Education>
    </View>
  );
};

export default () => {
  return (
    <View
      style={styles()
        .bg(colors.bgWhite)
        .paddingh(29)
        .paddingv(29)}
    >
      <Summary></Summary>
      <Experience></Experience>
    </View>
  );
};
