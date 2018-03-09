import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/rick';
import Container from './container';
import Section from './section';

export default function example() {
  return (
    <Container>
      <Section title="Common">
        <AwesomeButton
          style={styles.button}
          type="primary"
        >
          Primary
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          type="secondary"
        >
          Secondary
        </AwesomeButton>
        <AwesomeButton
          disabled
          style={styles.button}
          type="primary"
        >
          Disabled
        </AwesomeButton>
      </Section>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    marginBottom: 8,
  },
});

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
        onPress={() => navigation.navigate('Example4')}
        color="#fff"
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
        color="#fff"
      >
        Back
      </AwesomeButton>
    ),
  };
}
