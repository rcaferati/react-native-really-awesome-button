import React from 'react';
import AwesomeButton from '../index';

const COMMON = {
  borderRadius: 4,
  height: 55,
  activityColor: "#b3e5e1",
  raiseLevel: 5,
};

const BUTTONS = {
  primary: {
    backgroundColor: "#E82F3A",
    backgroundDarker: "#a41b1b",
    textColor: '#FFFFFF',
    backgroundProgress: "#57a9d4",
    ... COMMON,
  },
  secondary: {
    backgroundColor: "#404C60",
    backgroundDarker: "#242f41",
    textColor: '#FFFFFF',
    ... COMMON,
  },
  disabled: {
    backgroundColor: "#DFDFDF",
    backgroundDarker: "#CACACA",
    textColor: '#B6B6B6',
    ... COMMON,
  },
}

export default function theme(props) {
  const styles = props.disabled ? BUTTONS.disabled : BUTTONS[props.type || 'primary'];
  return (
    <AwesomeButton
      {...props}
      {...styles}
    />
  );
}
