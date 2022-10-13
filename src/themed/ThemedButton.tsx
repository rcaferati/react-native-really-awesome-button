import React from 'react';
import AwesomeButton, { ButtonTypes } from '../Button';
import getTheme from './themes';

export type ThemedButton = {
  disabled?: boolean;
  index?: number | null;
  flat?: boolean;
  config?: any;
  name?: string | null;
  transparent?: boolean;
  type?:
    | 'primary'
    | 'secondary'
    | 'anchor'
    | 'danger'
    | 'flat'
    | 'twitter'
    | 'facebook'
    | 'whatsapp'
    | 'instagram'
    | 'youtube'
    | 'linkedin'
    | 'pinterest'
    | 'messenger';
  size?: 'small' | 'medium' | 'large' | 'icon';
};

function Themed({
  disabled,
  index = null,
  config,
  name = null,
  transparent = false,
  type = 'primary',
  size = 'medium',
  ...extra
}: ThemedButton & ButtonTypes) {
  const theme = config || getTheme(index, name);
  const styles: any = disabled ? theme.buttons.disabled : theme.buttons[type];
  const sizeObj: any = size ? theme.size[size] : {};

  return <AwesomeButton {...styles} {...sizeObj} disabled={disabled} {...extra} />;
}

export default Themed;
