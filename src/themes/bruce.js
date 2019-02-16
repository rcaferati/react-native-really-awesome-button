import React from "react";
import PropTypes from "prop-types";
import AwesomeButton from "../index";
import SocialTypes from "./social";

const COMMON = {
  borderRadius: 8,
  height: 60,
  raiseLevel: 10
};

const SOCIAL_TYPES = SocialTypes(COMMON);

const BUTTONS = {
  primary: {
    ...COMMON,
    backgroundColor: "#2f2f2f",
    backgroundDarker: "#1a1a1a",
    backgroundProgress: "#1f1f1f",
    textColor: "#FFF",
    activityColor: "#FFF"
  },
  secondary: {
    ...COMMON,
    backgroundColor: "#efefef",
    backgroundDarker: "#1a1a1a",
    backgroundActive: "#cacaca",
    backgroundProgress: "#afafaf",
    backgroundPlaceholder: "#4f4f4f",
    textColor: "#2f2f2f",
    borderWidth: 1,
    borderColor: "#1a1a1a",
    activityColor: "#1a1a1a"
  },
  anchor: {
    ...COMMON,
    backgroundColor: "#4f4f4f",
    backgroundDarker: "#3a3a3a",
    backgroundProgress: "#404040",
    textColor: "#FFF",
    activityColor: "#FFF"
  },
  disabled: {
    ...COMMON,
    backgroundColor: "#999999",
    backgroundDarker: "#777777",
    textColor: "#BBBBBB"
  },
  flat: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backgroundDarker: "rgba(0, 0, 0, 0)",
    backgroundShadow: "rgba(0, 0, 0, 0)",
    raiseLevel: 0,
    borderRadius: 0
  },
  ...SOCIAL_TYPES
};

const SIZE = {
  small: {
    width: 120,
    height: 42,
    textSize: 12
  },
  medium: {
    width: 200,
    height: 55
  },
  large: {
    width: 250,
    height: 60,
    textSize: 16
  }
};

function theme(props) {
  const { disabled, type, size } = props;
  const styles = disabled ? BUTTONS.disabled : BUTTONS[type];
  const sizeObj = size ? SIZE[size] : {};
  return <AwesomeButton {...styles} {...sizeObj} {...props} />;
}

theme.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string
};

theme.defaultProps = {
  type: "primary",
  disabled: false,
  size: null
};

export default theme;
