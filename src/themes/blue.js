import React from 'react';
import PropTypes from 'prop-types';
import AwesomeButton from '../index';

const COMMON = {
  borderRadius: 4,
  height: 55,
  raiseLevel: 5,
};

const BUTTONS = {
  primary: {
    ...COMMON,
    backgroundColor: '#1775c8',
    backgroundDarker: '#125a9a',
    backgroundProgress: '#125a9a',
    textColor: '#FFF',
    activityColor: '#b3e5e1',
  },
  secondary: {
    ...COMMON,
    backgroundColor: '#e9f0f5',
    backgroundDarker: '#0e71c8',
    backgroundActive: '#e1eef7',
    backgroundProgress: '#c8e3f5',
    backgroundPlaceholder: '#1e88e5',
    textColor: '#1e88e5',
    borderWidth: 1,
    borderColor: '#1e88e5',
    activityColor: '#1e88e5',
  },
  anchor: {
    ...COMMON,
    backgroundColor: '#0e4f88',
    backgroundDarker: '#09365e',
    backgroundProgress: '#09365e',
    textColor: '#FFF',
    activityColor: '#FFF',
  },
  disabled: {
    ...COMMON,
    backgroundColor: '#DFDFDF',
    backgroundDarker: '#CACACA',
    textColor: '#B6B6B6',
  },
  primaryFlat: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundDarker: 'rgba(0, 0, 0, 0)',
    backgroundShadow: 'rgba(0, 0, 0, 0)',
    raiseLevel: 0,
    borderRadius: 0,
  },
};

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
};

function theme(props) {
  const {
    disabled,
    type,
    size,
  } = props;
  const styles = disabled ? BUTTONS.disabled : BUTTONS[type];
  const realSize = size ? SIZE[size] : {};
  return (
    <AwesomeButton
      {...styles}
      {...realSize}
      {...props}
    />
  );
}

theme.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

theme.defaultProps = {
  type: 'primary',
  disabled: false,
  size: null,
};

export default theme;
