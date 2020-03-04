import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { MediaQuery, Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

import Header from "./Header";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

import Base from "../../components/Base";

export default class App extends Base {
  renderDesktop() {
    return (
      <View
        style={styles()
          .row()
          .container()}
      >
        <View style={styles().span(1)}>
          <Experience></Experience>
        </View>
        <View
          style={styles()
            .w(355)
            .column()}
        >
          <View
            style={styles()
              .bg(colors.bgGray)
              .container()
              .paddingh(20)
              .paddingv(36)}
          >
            <PersonalInfo></PersonalInfo>
            <Skills></Skills>
          </View>
        </View>
      </View>
    );
  }

  renderMobile() {
    return (
      <View
        style={styles()
          .container()
          .column()}
      >
        <View>
          <Experience></Experience>
        </View>
        <PersonalInfo></PersonalInfo>
      </View>
    );
  }

  render() {
    return (
      <View
        style={styles()
          .container()
          .bg(colors.bgGray)
          .paddingv(30)
          .center()}
      >
        <View
          style={styles()
            .maxW(1240)
            .h(1754)
            .borderShadow()}
        >
          <Header></Header>
          <Desktop>{this.renderDesktop()}</Desktop>
          <Mobile>{this.renderMobile()}</Mobile>
        </View>
      </View>
    );
  }
}
