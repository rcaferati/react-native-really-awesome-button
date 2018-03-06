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
    backgroundColor: "#1775c8",
    backgroundDarker: "#125a9a",
    textColor: '#FFF',
    backgroundProgress: "#125a9a",
    ... COMMON,
  },
  secondary: {
    backgroundColor: "#e9f0f5",
    backgroundDarker: "#165fa4",
    textColor: '#1e88e5',
    borderWidth: 2,
    borderColor: "#1e88e5",
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
