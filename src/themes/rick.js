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
    textColor: '#535100',
    borderWidth: 2,
    borderColor: "#b3e5e1",
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
