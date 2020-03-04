import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

import Text from "../../components/Text";
import Separator from "../../components/Separator";

export default () => {
  let items = [
    { name: "HTML 5", rank: 9 },
    { name: "CSS 3", rank: 9 },
    { name: "Javascript (ES6)", rank: 9 },
    { name: "React (JS, native)", rank: 8 },
    { name: "Git", rank: 8 },
    { name: "JQuery", rank: 7 },
    { name: "Laravel (PHP)", rank: 5 },
    { name: "Angular JS (1, 5)", rank: 4 }
  ];

  let fullStyle = styles()
    .size(20)
    .bg(colors.ftBlue)
    .border(2, colors.ftBlue)
    .marginr(5);
  let emptyStyle = styles()
    .size(20)
    .border(2, colors.ftBlue)
    .marginr(5);

  return (
    <View style={styles()}>
      <Text
        style={styles()
          .bold()
          .ftSize(22)
          .marginb(10)}
      >
        Skills
      </Text>
      <Separator style={styles().marginb(22)}></Separator>

      {items.map((item, index) => {
        return (
          <View
            key={index}
            style={styles()
              .column()
              .marginb(20)}
          >
            <Text
              style={styles()
                .marginb(3)
                .ftSize(15)
                .bold()}
            >
              {item.name}
            </Text>
            <View style={styles().row()}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(block =>
                block <= item.rank ? (
                  <View key={block} style={fullStyle}></View>
                ) : (
                  <View key={block} style={emptyStyle}></View>
                )
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};
