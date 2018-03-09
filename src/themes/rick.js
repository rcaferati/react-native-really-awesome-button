import React from 'react';
import AwesomeButton from '../index';

const COMMON = {
  borderRadius: 25,
  height: 55,
  activityColor: "#FFFFFF",
  raiseLevel: 5,
};

const BUTTONS = {
  primary: {
    backgroundColor: "#aad3ea",
    backgroundDarker: "#57a9d4",
    textColor: '#2e84b1',
    backgroundProgress: "#57a9d4",
    ... COMMON,
  },
  secondary: {
    backgroundColor: "#FAFAFA",
    backgroundDarker: "#67cbc3",
    textColor: '#349890',
    borderWidth: 2,
    borderColor: "#b3e5e1",
    ... COMMON,
  },
  disabled: {
    backgroundColor: "#e8fcda",
    backgroundDarker: "#bde1a2",
    textColor: '#c7f2a9',
    borderWidth: 2,
    borderColor: "#c7e8ae",
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
