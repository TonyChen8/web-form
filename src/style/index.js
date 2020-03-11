/* global Dimensions, Platform, Constants */
// import { Dimensions, Platform } from "react-native";
// import Constants from "expo-constants";
import PubSub from "pubsub-js";

let Dimensions, Platform, Constants;

const designWidth = 768;
const designHeight = 1024;

let pointToPxFactor;
let fontCalibration = 1;
let timer = null;

export const reStyle = () => {
  const width = Math.round(
    Dimensions ? Dimensions.get("window").width : Math.max(window.innerWidth || 100)
  );
  const height = Math.round(
    Dimensions ? Dimensions.get("window").height : Math.max(window.innerHeight || 100)
  );

  // pointToPxFactor = (1 * width) / designWidth; //this is for converting size from XD design to real device.
  pointToPxFactor = Math.max(1, (1 * height) / designHeight); //this is for converting size from XD design to real device.

  console.log(".js:6", width, height, pointToPxFactor);

  timer && clearTimeout(timer);
  timer = setTimeout(() => {
    PubSub.publish("MSG.Style.Update");
  }, 300);
};

Dimensions &&
  Dimensions.addEventListener &&
  Dimensions.addEventListener("change", () => reStyle());
reStyle();

const randomColor = () => {
  return ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(0, 7);
};

class style {
  constructor(s) {
    Object.assign(this, s);
    // this.bg();
    return this;
  }

  p2p(point) {
    return point * 1 * pointToPxFactor;
  }

  isIOS() {
    return Platform ? Platform.OS === "ios" : false;
  }
  isWeb() {
    return Platform ? Platform.OS === "web" : true;
  }

  safe() {
    this.marginTop = Constants ? Constants.statusBarHeight : 0;
    return this;
  }

  span(s) {
    this.flex = s;
    return this;
  }

  float(t, r, b, l) {
    this.position = "absolute";
    typeof t === "number" && (this.top = t);
    typeof r === "number" && (this.right = r);
    typeof b === "number" && (this.bottom = b);
    typeof l === "number" && (this.left = l);
    return this;
  }

  overflowHide(h = "hidden") {
    this.overflow = h; // "hidden" , "scroll", "visible";
    return this;
  }

  padd(t, r, b, l) {
    this.paddingl(l)
      .paddingt(t)
      .paddingr(r)
      .paddingb(b);
    return this;
  }
  paddingl(p) {
    this.paddingLeft = p * pointToPxFactor;
    return this;
  }
  paddingt(p) {
    this.paddingTop = p * pointToPxFactor;
    return this;
  }
  paddingr(p) {
    this.paddingRight = p * pointToPxFactor;
    return this;
  }
  paddingb(p) {
    this.paddingBottom = p * pointToPxFactor;
    return this;
  }
  paddingv(p) {
    if (this.isWeb()) {
      this.paddingTop = p * pointToPxFactor;
      this.paddingBottom = p * pointToPxFactor;
    } else {
      this.paddingVertical = p * pointToPxFactor;
    }
    return this;
  }
  paddingh(p) {
    if (this.isWeb()) {
      this.paddingLeft = p * pointToPxFactor;
      this.paddingRight = p * pointToPxFactor;
    } else {
      this.paddingHorizontal = p * pointToPxFactor;
    }
    return this;
  }

  marg(t, r, b, l) {
    this.marginl(l)
      .margint(t)
      .marginr(r)
      .marginb(b);
    return this;
  }
  marginl(m) {
    this.marginLeft = m * pointToPxFactor;
    return this;
  }
  margint(m) {
    this.marginTop = m * pointToPxFactor;
    return this;
  }
  marginr(m) {
    this.marginRight = m * pointToPxFactor;
    return this;
  }
  marginb(m) {
    this.marginBottom = m * pointToPxFactor;
    return this;
  }
  marginv(m) {
    if (this.isWeb()) {
      this.marginTop = m * pointToPxFactor;
      this.marginBottom = m * pointToPxFactor;
    } else {
      this.marginVertical = m * pointToPxFactor;
    }
    return this;
  }
  marginh(m) {
    if (this.isWeb()) {
      this.marginLeft = m * pointToPxFactor;
      this.marginRight = m * pointToPxFactor;
    } else {
      this.marginHorizontal = m * pointToPxFactor;
    }
    return this;
  }

  size(s) {
    this.height = s * pointToPxFactor;
    this.width = s * pointToPxFactor;
    return this;
  }

  h(h) {
    typeof h === "number" ? (this.minHeight = h * pointToPxFactor) : (this.minHeight = h);
    return this;
  }

  fixH(h) {
    typeof h === "number" ? (this.height = h * pointToPxFactor) : (this.height = h);
    return this;
  }
  lineH(h) {
    typeof h === "number"
      ? (this.lineHeight = h * pointToPxFactor)
      : (this.lineHeight = h);
    return this;
  }

  w(w) {
    typeof w === "number" ? (this.width = w * pointToPxFactor) : (this.width = w);
    return this;
  }

  minW(w) {
    typeof w === "number" ? (this.minWidth = w * pointToPxFactor) : (this.minWidth = w);
    return this;
  }
  maxW(w) {
    typeof w === "number" ? (this.maxWidth = w * pointToPxFactor) : (this.maxWidth = w);
    return this;
  }

  bg(c = randomColor()) {
    this.backgroundColor = c;
    return this;
  }
  bold(b = "900") {
    this.fontFamily = "karlaBold";
    this.fontWeight = b;
    return this;
  }
  italic() {
    this.fontFamily = "italic";
    return this;
  }

  fade(o) {
    this.opacity = o;
    return this;
  }

  border(b, c = "white") {
    this.borderWidth = b;
    this.borderColor = c;
    this.radius(5);
    return this;
  }

  ftSpaceing(s) {
    this.letterSpacing = s;
    return this;
  }

  borderShadow() {
    this.elevation = 5;
    this.marginh(3);
    this.backgroundColor = "white";
    this.shadowColor = "black";
    this.shadowOpacity = 0.05;
    this.shadowRadius = 5;
    this.shadowOffset = {
      height: 4 * pointToPxFactor,
      width: 2 * pointToPxFactor
    };
    return this;
  }

  bordert(b, c = "gray") {
    this.borderTopWidth = b;
    this.borderTopColor = c;
    return this;
  }
  borderr(b, c = "gray") {
    this.borderRightWidth = b;
    this.borderRightColor = c;
    return this;
  }
  borderb(b, c = "gray") {
    this.borderBottomWidth = b;
    this.borderBottomColor = c;
    return this;
  }
  borderl(b, c = "gray") {
    this.borderLeftWidth = b;
    this.borderLeftColor = c;
    return this;
  }
  radius(r) {
    this.borderRadius = r * pointToPxFactor;
    return this;
  }

  container() {
    this.flex = 1;
    return this;
  }
  row() {
    this.display = "flex";
    this.flexDirection = "row";
    return this;
  }
  column() {
    this.display = "flex";
    this.flexDirection = "column";
    return this;
  }
  fullSize() {
    this.flex = 1;
    this.width = "100%";
    return this;
  }

  fullWidth() {
    this.width = "100%";
    return this;
  }
  fullHeight() {
    this.height = "100%";
    return this;
  }
  rowReverse() {
    this.flexDirection = "row-reverse";
    return this;
  }
  columnReverse() {
    this.flexDirection = "column-reverse";
    return this;
  }
  wrap() {
    this.flexWrap = "wrap";
    return this;
  }
  nowrap() {
    this.flexWrap = "nowrap";
    return this;
  }
  wrapReverse() {
    this.flexWrap = "wrap-reverse";
    return this;
  }
  center() {
    this.alignItems = "center";
    return this;
  }
  justifyCenter() {
    this.justifyContent = "center";
    return this;
  }
  centerall() {
    this.alignItems = "center";
    this.justifyContent = "center";
    return this;
  }

  spaceBetween() {
    this.justifyContent = "space-between";
    return this;
  }

  pullRight() {
    this.marginLeft = "auto";
    return this;
  }
  pullDown() {
    this.marginTop = "auto";
    return this;
  }

  ftSize(s) {
    this.fontSize = s * fontCalibration * pointToPxFactor;
    return this;
  }
  ftColor(c) {
    this.color = c;
    return this;
  }

  textShadow() {
    this.textShadowColor = "rgba(0, 0, 0, 1)";
    this.textShadowOffset = {
      width: 2 * pointToPxFactor,
      height: 2 * pointToPxFactor
    };
    this.textShadowRadius = 1;
    this.color = "white";
    return this;
  }

  ftWeight(w = 3, i = false) {
    // switch (w) {
    //   case 1:
    //     this.fontFamily = `ExtraLight${i ? "Italic" : ""}`;
    //     break;
    //   case 2:
    //     this.fontFamily = `Light${i ? "Italic" : ""}`;
    //     break;
    //   case 3:
    //     this.fontFamily = `Regular${i ? "Italic" : ""}`;
    //     break;
    //   case 4:
    //     this.fontFamily = `SemiBold${i ? "Italic" : ""}`;
    //     break;
    //   case 5:
    //     this.fontFamily = `Bold${i ? "Italic" : ""}`;
    //     break;
    //   case 6:
    //     this.fontFamily = `Black${i ? "Italic" : ""}`;
    //     break;
    // }
    return this;
  }

  cursor() {
    this.cursor = "pointer";
    return this;
  }

  z(z) {
    this.zIndex = z;
    return this;
  }
}

export default style;
