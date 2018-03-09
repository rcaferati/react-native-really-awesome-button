import React from 'react';
import AwesomeButton from '../index';

const COMMON = {
  borderRadius: 25,
  height: 55,
  activityColor: "#b3e5e1",
  backgroundProgress: "#b3e5e1",
  raiseLevel: 4,
};

const BUTTONS = {
  primary: {
    backgroundColor: "#475371",
    backgroundDarker: "#262d3d",
    textColor: '#e4e7ee',
    ... COMMON,
  },
  secondary: {
    backgroundColor: "#fefc6b",
    backgroundDarker: "#d2ce02",
    textColor: '#535100',
    ... COMMON,
  },
  disabled: {
    backgroundColor: "#edc9b1",
    backgroundDarker: "#755637",
    borderWidth: 1,
    borderColor: "#bd8f61",
    textColor: '#deaf90',
    ...COMMON,
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
