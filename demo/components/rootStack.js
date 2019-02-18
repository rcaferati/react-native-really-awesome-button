import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Theme0 from "./scenes/theme-0";
import Theme1 from "./scenes/theme-1";
import Theme2 from "./scenes/theme-2";
import Theme3 from "./scenes/theme-3";
import Theme4 from "./scenes/theme-4";
import Theme5 from "./scenes/theme-5";
import Theme6 from "./scenes/theme-6";
import Social from "./scenes/social";
import Progress from "./scenes/progress";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";

const ThemeStack = createStackNavigator(
  {
    Theme0: {
      screen: Theme0
    },
    Theme1: {
      screen: Theme1
    },
    Theme2: {
      screen: Theme2
    },
    Theme3: {
      screen: Theme3
    },
    Theme4: {
      screen: Theme4
    },
    Theme5: {
      screen: Theme5
    },
    Theme6: {
      screen: Theme6
    }
  },
  {
    initialRouteName: "Theme0"
  }
);

const SocialStack = createStackNavigator(
  {
    SocialHome: {
      screen: Social
    }
  },
  {
    initialRouteName: "SocialHome"
  }
);

const ProgressStack = createStackNavigator(
  {
    ProgressHome: {
      screen: Progress
    }
  },
  {
    initialRouteName: "ProgressHome"
  }
);

const RootStack = createBottomTabNavigator(
  {
    Themes: ThemeStack,
    Social: SocialStack,
    Progress: ProgressStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome;
        let iconName = "paint-brush";
        if (routeName === "Social") {
          iconName = `sharealt`;
          IconComponent = AntDesign;
        } else if (routeName === "Progress") {
          iconName = "progress-check";
          IconComponent = MaterialCommunityIcons;
        }
        return <IconComponent name={iconName} size={20} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default RootStack;
