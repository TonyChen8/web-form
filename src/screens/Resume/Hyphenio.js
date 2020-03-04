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
      <Text style={boldStyle()}>FEB-2018 -</Text>
      <Text style={boldStyle()}>FEB-2020</Text>
      <Text style={styles().ftSize(16)}>(24 months)</Text>
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
        Hyphenio, Eight Mile Plains, Brisbane, Australia
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
    "Implemented websites, mobile applications from conception through deployment.",
    "Maintained online products.",
    "Assessed UI and UX designs for technical feasibility.",
    "Collaboraed with back-end team members to implement new features.",
    "Analyzed and resolved issues to help supporting team answer customers' questions.",
    "Provided reasonable suggestion to improve the existing workflow."
  ];
  return items.map((item, index) => {
    return (
      <View
        key={index}
        style={styles()
          .row()
          .container()}
      >
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
      name: "DOOP, Ticket Scanner. ",
      desc: "Apps that help customer host graduation ceremony."
    },
    {
      name: "Kind+.",
      desc: "Collected donation for Charity. "
    },
    {
      name: "Paybae.",
      desc: "Collected data for a food festival. "
    },
    {
      name: "Procrush. ",
      desc:
        "A Digital solution to improve customers’ workflow and saved their time. Got thanks emails from customer."
    },
    {
      name: "Truly Cruelty Free. ",
      desc: "App helped user to search for a vegan product."
    },
    { name: "A Tailor portal. ", desc: "Helped customer to Replace an unstable system." },
    {
      name: "Student tickets and photos management system. ",
      desc: "Maintained an online portal that students purchased tickets and photos."
    },
    {
      name: "Bookkeeper website. ",
      desc:
        "Maintained an online portal that customer managed the membership of bookkeepers."
    }
  ];
  return items.map((item, index) => {
    return (
      <View
        key={index}
        style={styles()
          .row()
          .container()}
      >
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
