import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/cartman';
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
    title: 'Cartman Theme',
    headerStyle: {
      backgroundColor: '#EE3253',
    },
    headerTintColor: '#FFE11D',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        textColor="#FFE11D"
        width={80}
        onPress={() => navigation.navigate('Example3')}
        color="#fff"
      >
        Next
      </AwesomeButton>
    ),
    headerLeft: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        textColor="#FFE11D"
        width={80}
        onPress={() => navigation.goBack()}
        color="#fff"
      >
        Back
      </AwesomeButton>
    ),
  };
}
