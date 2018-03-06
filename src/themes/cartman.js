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
    backgroundDarker: "#d3bf3e",
    textColor: '#FFE11D',
    backgroundProgress: "#57a9d4",
    borderWidth: 1,
    borderColor: "#FFE11D",
    ... COMMON,
  },
  secondary: {
    backgroundColor: "#EE3253",
    backgroundDarker: "#d3bf3e",
    textColor: '#FFE11D',
    borderWidth: 1,
    borderColor: "#FFE11D",
    ... COMMON,
  },
  disabled: {
    backgroundColor: "#302E3C",
    backgroundDarker: "#67cbc3",
    ... COMMON,
  },
  placeholder: {
    backgroundColor: "#32458e",
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
