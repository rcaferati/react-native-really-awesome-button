import React from 'react';
import PropTypes from 'prop-types';
import AwesomeButton from '../index';

const COMMON = {
  borderRadius: 8,
  height: 53,
  activityColor: '#FFE11D',
  raiseLevel: 6,
};

const BUTTONS = {
  primary: {
    ...COMMON,
    backgroundColor: '#00B8C4',
    backgroundDarker: '#ccba3f',
    textColor: '#FFE11D',
    borderWidth: 1,
    borderColor: '#FFE11D',
  },
  secondary: {
    ...COMMON,
    backgroundColor: '#EE3253',
    backgroundDarker: '#ccba3f',
    textColor: '#FFE11D',
    borderWidth: 1,
    borderColor: '#FFE11D',
  },
  anchor: {
    ...COMMON,
    backgroundColor: '#302E3C',
    backgroundDarker: '#844D38',
    textColor: '#a25f45',
    backgroundProgress: '#57a9d4',
    borderWidth: 1,
    borderColor: '#844D38',
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
