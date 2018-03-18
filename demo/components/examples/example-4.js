import React from 'react';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/rick';
import { Example } from '../index';

function example() {
  return (
    <Example ButtonComponent={AwesomeButton} />
  );
}

example.navigationOptions = ({ navigation }) => {
  return {
    title: 'Rick Theme',
    headerStyle: {
      backgroundColor: '#aad3ea',
    },
    headerTintColor: '#2e84b1',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        textColor="#2e84b1"
        width={80}
        onPress={() => navigation.navigate('Example5')}
      >
        Next
      </AwesomeButton>
    ),
    headerLeft: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        textColor="#2e84b1"
        width={80}
        onPress={() => navigation.goBack()}
      >
        Back
      </AwesomeButton>
    ),
  };
}

export default example;
