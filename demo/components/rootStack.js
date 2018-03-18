import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
} from './index';

const RootStack = StackNavigator(
  {
    Example1: {
      screen: Example1,
    },
    Example2: {
      screen: Example2,
    },
    Example3: {
      screen: Example3,
    },
    Example4: {
      screen: Example4,
    },
    Example5: {
      screen: Example5,
    },
  },
  {
    initialRouteName: 'Example1',
  }
);

export default RootStack;
