import React, { Component } from "react";
import { View } from "react-native";

import Text from "../../components/Text";

import { Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

const boldStyle = () =>
  styles()
    .bold()
    .ftSize(19);

const DateRange = () => {
  return (
    <View style={styles().w(130)}>
      <Text style={boldStyle()}>OCT-2016 -</Text>
      <Text style={boldStyle()}>DEC-2017</Text>
      <Text style={styles().ftSize(16)}>(14 months)</Text>
    </View>
  );
};

const ExperienceDetails = () => {
  return (
    <View style={styles().span(1)}>
      <Text style={boldStyle()}>Front-End Developer</Text>
      <Text
        style={styles()
          .ftSize(16)
          .marginb(15)
          .italic()}
      >
        BrightFox, Bowen Hills, Brisbane, Australia
      </Text>
      <Text style={boldStyle()}>Responsibilities:</Text>

      <View style={styles().marginb(15)}>
        <Responsibilities></Responsibilities>
      </View>
      <Text style={boldStyle().marginb(5)}>Key Achievements:</Text>
      <View style={styles().marginb(15)}>
        <Achievements></Achievements>
      </View>
    </View>
  );
};

const Responsibilities = () => {
  let items = [
    "Implemented websites, mobile, kiosk applications.",
    "Maintained online products."
  ];
  return items.map((item, index) => {
    return (
      <View key={index} style={styles().row()}>
        <Text
          style={styles()
            .marginh(10)
            .ftSize(16)}
        >
          {"\u2022"}
        </Text>
        <Text
          style={styles()
            .span(1)
            .ftSize(16)
            .lineH(23)}
        >
          {item}
        </Text>
      </View>
    );
  });
};

const Achievements = () => {
  let items = [
    {
      name: "CRM system for property salesman.",
      desc: "Add some new features to existing online system."
    },
    {
      name: "Apps for property salesman.",
      desc: "Implemented with Phonegap. Fetch data to display to clients."
    }
  ];
  return items.map((item, index) => {
    return (
      <View key={index} style={styles().row()}>
        <Text
          style={styles()
            .marginh(10)
            .ftSize(16)}
        >
          {"\u2022" /*bullet point*/}
        </Text>
        <View style={styles().container()}>
          <Text
            style={styles()
              .ftSize(16)
              .lineH(16)}
          >
            {item.name}
          </Text>
          <Text
            style={styles()
              .ftSize(13)
              .marginb(10)}
          >
            {item.desc}
          </Text>
        </View>
      </View>
    );
  });
};

export default () => {
  return (
    <View
      style={styles()
        .row()
        .marginb(20)}
    >
      <DateRange></DateRange>
      <ExperienceDetails></ExperienceDetails>
    </View>
  );
};
