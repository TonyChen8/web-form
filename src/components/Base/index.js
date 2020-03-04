import { Component } from "react";
// import Toast from "react-native-root-toast";

import PubSub from "pubsub-js";

export default class Base extends Component {
  constructor(props) {
    super(props);
    this.bindEventCallback();
    this.pubSubHandles = [];
    this.sub("MSG.Style.Update", () => this.forceUpdate());
  }

  beforeNavigation(url, params) {
    // try {
    //   DailyTracker.logBehaviour(
    //     User.getCurrentUser()
    //       .getCurrentJob()
    //       .getId(),
    //     { Navigation: url, params: params }
    //   );
    // } catch (e) {
    //   console.log(e);
    // }
  }

  componentWillUnmount() {
    if (this.pubSubHandles.length > 0) {
      this.pubSubHandles.forEach(x => PubSub.unsubscribe(x));
      this.pubSubHandles = [];
    }
  }

  navigate(url, params) {
    const location = { pathname: url, params };
    this.props.history.push(location);
  }

  navigateReplace(url, params) {
    const location = { pathname: url, params };
    this.props.history.replace(location);
  }

  navigateBack() {
    this.props.history.goBack();
  }

  // navigateBack(numberOfScreen) {
  //   this.beforeNavigation("go back", null);
  //   this.props.navigation
  //     ? this.props.navigation.pop(numberOfScreen)
  //     : console.warn("/index.js:25 this.props.navigation is null", numberOfScreen);
  // }

  // navigate(url, params) {
  //   this.beforeNavigation(url, params);
  //   this.props.navigation
  //     ? this.props.navigation.navigate(url, params)
  //     : console.warn("/index.js:29 this.props.navigation is null", url, params);
  // }

  // navigatePush(url, params) {
  //   this.beforeNavigation(url, params);
  //   this.props.navigation
  //     ? this.props.navigation.push(url, params)
  //     : console.warn("/index.js:39 this.props.navigation is null", url, params);
  // }

  navigationReset(url, params) {
    // Navigation.reset(url, params);
  }

  bindEventCallback(instance = this) {
    if (instance.constructor.name !== "Base" && instance.__proto__) {
      Object.getOwnPropertyNames(instance.__proto__).forEach(item => {
        if (typeof this[item] === "function" && item.indexOf("on") === 0) {
          this[item] = this[item].bind(this);
        }
      });
      this.bindEventCallback(instance.__proto__);
    }
  }

  pub(msg, params) {
    return PubSub.publish(msg, params);
  }

  sub(msg, func) {
    const handle = PubSub.subscribe(msg, func);
    this.pubSubHandles.push(handle);
  }

  // showToast(message) {
  //   this.toast = Toast.show(message, {
  //     duration: Toast.durations.LONG,
  //     position: Toast.positions.TOP,
  //     shadow: true,
  //     animation: true,
  //     hideOnPress: true,
  //     delay: 0,
  //     onShow: () => {
  //       // calls on toast\`s appear animation start
  //     },
  //     onShown: () => {
  //       // calls on toast\`s appear animation end.
  //     },
  //     onHide: () => {
  //       // calls on toast\`s hide animation start.
  //     },
  //     onHidden: () => {
  //       // calls on toast\`s hide animation end.
  //     }
  //   });
  // }
}
