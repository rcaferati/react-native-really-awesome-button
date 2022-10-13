import * as React from 'react';
import Example from '../components/Example';

function ThemeScreen({ route }: any) {
  const index: number = route?.params?.index || 0
  return (
    <Example index={index} />
  );
}

export default ThemeScreen;