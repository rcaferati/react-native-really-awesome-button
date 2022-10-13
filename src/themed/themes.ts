import bojack from './bojack';
import c137 from './c137';
import bruce from './bruce';
import cartman from './cartman';
import mysterion from './mysterion';
import summer from './summer';
import rick from './rick';
import basic from './basic';

const themes: any = {
  basic,
  bojack,
  cartman,
  mysterion,
  c137,
  rick,
  summer,
  bruce,
};

const getThemeByIndex = (index: number | null = 0) => {
  const keys: any = Object.keys(themes);

  if (index === null || !keys[index]) {
    return null;
  }

  return {
    ...themes[keys[index]],
    next: !!keys[index + 1],
    prev: !!keys[index - 1],
    name: keys[index],
  };
};

const getThemeByName = (name: string) => {
  const keys = Object.keys(themes);
  const index = keys.indexOf(name);
  if (index === -1) {
    return null;
  }
  return getThemeByIndex(index);
};

const getTheme = (index: number | null = 0, name: string | null = null) => {
  return name ? getThemeByName(name) : getThemeByIndex(index);
};

export default getTheme;
