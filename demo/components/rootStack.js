import React from "react";
import { createStackNavigator } from "react-navigation";
import {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
  Example6
} from "./index";

const RootStack = createStackNavigator(
  {
    Example1: {
      screen: Example1
    },
    Example2: {
      screen: Example2
    },
    Example3: {
      screen: Example3
    },
    Example4: {
      screen: Example4
    },
    Example5: {
      screen: Example5
    },
    Example6: {
      screen: Example6
    }
  },
  {
    initialRouteName: "Example1"
  }
);

export default RootStack;
