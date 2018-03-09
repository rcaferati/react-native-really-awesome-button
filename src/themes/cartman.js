import React from 'react';
import AwesomeButton from '../index';

const COMMON = {
  borderRadius: 8,
  height: 53,
  activityColor: "#b3e5e1",
  raiseLevel: 6,
};

const BUTTONS = {
  primary: {
    backgroundColor: "#00B8C4",
    backgroundDarker: "#ccba3f",
    textColor: '#FFE11D',
    backgroundProgress: "#57a9d4",
    borderWidth: 0.5,
    borderColor: "#FFE11D",
    ...COMMON,
  },
  secondary: {
    backgroundColor: "#EE3253",
    backgroundDarker: "#ccba3f",
    textColor: '#FFE11D',
    borderWidth: 0.5,
    borderColor: "#FFE11D",
    ...COMMON,
  },
  disabled: {
    backgroundColor: "#DFDFDF",
    backgroundDarker: "#CACACA",
    textColor: '#B6B6B6',
    ... COMMON,
  },
  primaryFlat: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundDarker: 'rgba(0, 0, 0, 0)',
    backgroundShadow: 'rgba(0, 0, 0, 0)',
    raiseLevel: 0,
    borderRadius: 0,
  },
}

const SIZE = {
  small: {
    width: 120,
    height: 42,
    textSize: 12,
  },
  large: {
    width: 250,
    height: 60,
    textSize: 16,
  },
}

export default function theme(props) {
  const styles = props.disabled ? BUTTONS.disabled : BUTTONS[props.type || 'primary'];
  const size = props.size ? SIZE[props.size] : {};
  return (
    <AwesomeButton
      {...styles}
      {...size}
      {...props}
    />
  );
}
