import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Example1 from './components/example-1';
import Example2 from './components/example-2';
import Example3 from './components/example-3';
import Example4 from './components/example-4';

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
  },
  {
    initialRouteName: 'Example1',
  }
);

export default class Demo extends React.Component {
  render() {
    return <RootStack />;
  }
}
