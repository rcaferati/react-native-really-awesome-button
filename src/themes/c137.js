import React from 'react';
import AwesomeButton from '../index';

const COMMON = {
  borderRadius: 25,
  height: 55,
  borderColor: "#b3e5e1",
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
    backgroundColor: "#FAFAFA",
    backgroundDarker: "#67cbc3",
    ... COMMON,
  },
  placeholder: {
    backgroundColor: "#FAFAFA",
    backgroundDarker: "#67cbc3",
    ... COMMON,
  }
}

export default class C137 extends React.Component {
  render() {
    return (
      <AwesomeButton
        {...this.props}
        {...BUTTONS[this.props.type || 'primary']}
      />
    );
  }
}
