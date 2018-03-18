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
    ... COMMON,
    backgroundColor: "#aad3ea",
    backgroundDarker: "#57a9d4",
    backgroundPlaceholder: "#8dbdd9",
    textColor: '#2e84b1',
    backgroundProgress: "#57a9d4",
  },
  secondary: {
    ... COMMON,
    backgroundColor: "#FAFAFA",
    backgroundDarker: "#67cbc3",
    backgroundActive: "#e7fcfb",
    backgroundPlaceholder: "#b3e5e1",
    textColor: '#349890',
    backgroundProgress: "#c5ece8",
    borderWidth: 2,
    borderColor: "#b3e5e1",
    activityColor: "#349890",
  },
  anchor: {
    ... COMMON,
    backgroundColor: "#95d44a",
    backgroundDarker: "#489d2b",
    textColor: '#34711f',
    backgroundProgress: "#489d2b",
    borderWidth: 2,
    borderColor: "#5bbd3a",
  },
  disabled: {
    ... COMMON,
    backgroundColor: "#e8fcda",
    backgroundDarker: "#bde1a2",
    textColor: '#c7f2a9',
    borderWidth: 2,
    borderColor: "#c7e8ae",
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
