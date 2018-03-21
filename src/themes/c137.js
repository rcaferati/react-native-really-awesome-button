import React from 'react';
import PropTypes from 'prop-types';
import AwesomeButton from '../index';

const COMMON = {
  borderRadius: 25,
  height: 55,
  activityColor: '#b3e5e1',
  raiseLevel: 4,
};

const BUTTONS = {
  primary: {
    ...COMMON,
    backgroundColor: '#475371',
    backgroundDarker: '#262d3d',
    backgroundProgress: '#262d3d',
    textColor: '#e4e7ee',
    activityColor: '#e4e7ee',
  },
  secondary: {
    ...COMMON,
    backgroundColor: '#fefc6b',
    backgroundDarker: '#d2ce02',
    backgroundProgress: '#d2ce02',
    textColor: '#535100',
    activityColor: '#535100',
  },
  anchor: {
    ...COMMON,
    backgroundColor: '#f3c8ad',
    backgroundDarker: '#734922',
    backgroundProgress: '#d2ce02',
    textColor: '#734922',
    activityColor: '#535100',
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
  const sizeObj = size ? SIZE[size] : {};
  return (
    <AwesomeButton
      {...styles}
      {...sizeObj}
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
