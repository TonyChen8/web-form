import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

import Text from "../../components/Text";
import Separator from "../../components/Separator";

export default () => {
  let items = [
    { name: "Address", info: "75 Tramore St. Rocklea, QLD, 4106" },
    { name: "Phone", info: "0405896050" },
    { name: "E-mail", info: "tonychen8302@gmail.com" }
  ];
  return (
    <View>
      <Text
        style={styles()
          .bold()
          .ftSize(22)
          .marginb(10)}
      >
        Personal Info
      </Text>
      <Separator style={styles().marginb(22)}></Separator>
      {items.map((item, index) => {
        return (
          <View style={styles()} key={index}>
            <Text
              style={styles()
                .bold()
                .ftSize(15)
                .marginb(0)}
            >
              {item.name}
            </Text>
            <Text
              style={styles()
                .ftSize(14)
                .marginb(15)}
            >
              {item.info}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
