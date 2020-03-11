/* global styles */
import React from "react";
import BaseComponent from "../Base";
import "./styles.css";

export default class Spinner extends BaseComponent {
  static Messages = {
    Show: "MSG.Spinner.Show",
    Update: "MSG.Spinner.Update",
    Error: "MSG.Spinner.Error"
  };

  constructor(props) {
    super(props);
    this.sub(Spinner.Messages.Show, this.onStateChange);
    this.sub(Spinner.Messages.Update, this.onStateUpdate);
    this.state = {
      innerstyle: {},
      show: false,
      text: null,
      textStyle: styles()
        .ftColor("white")
        .ftSize(20),
      overlayColor: "rgba(0, 0, 0, 0.5) ",
      additionalText: ""
    };
    this.timer = null;
    this.screenSize = null;
  }

  cancelTimer() {
    this.timer && clearTimeout(this.timer);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    this.cancelTimer();
  }

  componentDidUpdate() {
    if (this.container) {
      let size = Math.min(this.container.clientHeight, this.container.clientWidth);
      if (this.screenSize !== size) {
        this.screenSize = size;
        this.setState({
          innerstyle: {
            width: `${size * 0.2}px`,
            height: `${size * 0.2}px`,
            border: `${size * 0.02}px solid #f3f3f3`,
            borderTop: `${size * 0.02}px solid #3498db`,
            borderRadius: "50%"
          }
        });
      }
    }
  }

  onStateChange(message, params) {
    const {
      show = false,
      timeout = "30000",
      text = "",
      textStyle = styles()
        .ftColor("white")
        .ftSize(20)
        .ftWeight(4),
      overlayColor = "rgba(0, 0, 0, 0.7) "
    } = params;

    if (show) {
      this.cancelTimer();
      this.setState({ show, text, textStyle, overlayColor, additionalText: "" });
      this.timer = setTimeout(() => {
        this.setState({ show: false, additionalText: "" });
        this.pub(Spinner.Messages.Error, { error: "Time out." });
      }, parseInt(timeout));
    } else {
      this.cancelTimer();
      this.setState({ show: false, additionalText: "" });
    }
  }

  render() {
    const {
      innerstyle,
      show,
      text,
      textStyle,
      overlayColor,
      additionalText
    } = this.state;
    const { style } = this.props;
    return show ? (
      <div
        ref={ref => (this.container = ref)}
        style={styles()
          .float(0, 0, 0, 0)
          .column()
          .centerall()
          .bg(overlayColor)}
      >
        <div className="loader" style={{ ...innerstyle, ...style }} />
        {text && text.length > 0 && <div style={textStyle}>{text + additionalText}</div>}
      </div>
    ) : null;
  }
}
