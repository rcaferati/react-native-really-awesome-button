import React from "react";
import { createStackNavigator } from "react-navigation";
import Example1 from "./examples/example-1";
import Example2 from "./examples/example-2";
import Example3 from "./examples/example-3";
import Example4 from "./examples/example-4";
import Example5 from "./examples/example-5";
import Example6 from "./examples/example-6";

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
