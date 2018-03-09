import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/c137';
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
    title: 'C-137 Theme',
    headerStyle: {
      backgroundColor: '#fffa82',
    },
    headerTintColor: '#535015',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        textColor="#535015"
        width={80}
        onPress={() => navigation.goBack()}
        color="#fff"
      >
        Back
      </AwesomeButton>
    ),
  };
}
