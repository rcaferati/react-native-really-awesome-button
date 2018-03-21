import React from 'react';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/red';
import { Example } from '../index';

function example() {
  return (
    <Example ButtonComponent={AwesomeButton} />
  );
}

example.navigationOptions = ({ navigation }) => {
  return {
    title: 'Red Theme',
    headerStyle: {
      backgroundColor: '#E82F3A',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        width={80}
        onPress={() => navigation.navigate('Example3')}
        textColor="#FFF"
      >
        Next
      </AwesomeButton>
    ),
    headerLeft: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        textColor="#FFF"
        width={80}
        onPress={() => navigation.goBack()}
      >
        Back
      </AwesomeButton>
    ),
  };
};

export default example;
