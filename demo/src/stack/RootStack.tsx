import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemedButton, getTheme } from 'react-native-really-awesome-button';
import ThemeScreen from '../screens/ThemeScreen';
import Social from '../screens/Social';
import Progress from '../screens/Progress';
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const options = ({ route, navigation }: any) => {
  let index =
    typeof route?.params?.index !== 'undefined' ? route.params.index : 0;
  const theme = getTheme(index);

  const navigationOptions: NativeStackNavigationOptions = {
    title: theme.title,
    headerStyle: {
      backgroundColor: theme.background,
    },
    headerTintColor: theme.color,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () =>
      theme.next && (
        <ThemedButton
          size="small"
          config={theme}
          type="flat"
          debouncedPressTime={875}
          backgroundActive="rgba(0,0,0,0.05)"
          activeOpacity={0.6}
          textColor={theme.color}
          width={80}
          disabled={false}
          onPress={() => navigation.push('ThemeScreen', { index: index + 1 })}
        >
          Next
        </ThemedButton>
      ),
    headerLeft: () =>
      theme.prev && (
        <ThemedButton
          size="small"
          type="flat"
          config={theme}
          debouncedPressTime={875}
          backgroundActive="rgba(0,0,0,0.05)"
          activeOpacity={0.6}
          textColor={theme.color}
          width={80}
          disabled={false}
          onPress={() => navigation.pop()}
        >
          Prev
        </ThemedButton>
      ),
  };

  return navigationOptions;
};

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="ThemeScreen">
      <Stack.Screen
        options={options}
        name="ThemeScreen"
        component={ThemeScreen}
      />
    </Stack.Navigator>
  );
}

//FontAwesome5 brush
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }: any) => {
            if (route.name === 'Themed Buttons') {
              return <FontAwesome5 name="brush" size={21} color={color} />;
            }

            if (route.name === 'Progress') {
              return <Entypo name="progress-two" size={21} color={color} />;
            }

            if (route.name === 'Social') {
              return (
                <Ionicons name="share-social-sharp" size={21} color={color} />
              );
            }

            return null;
          },
          tabBarActiveTintColor: '#038CD9',
          tabBarInactiveTintColor: '#C5C5C5',
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Themed Buttons"
          component={HomeNavigator}
        />
        <Tab.Screen name="Progress" component={Progress} />
        <Tab.Screen name="Social" component={Social} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
