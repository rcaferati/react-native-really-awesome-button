import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/blue';
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
      <Section title="Progress">
        <AwesomeButton
          progress
          onPress={(next) => setTimeout(() => { next() }, 1000)}
          style={styles.button}
          type="primary"
        >
          Progress
        </AwesomeButton>
        <AwesomeButton
          progress
          onPress={(next) => setTimeout(() => { next() }, 1000)}
          style={styles.button}
          type="secondary"
        >
          Progress
        </AwesomeButton>
      </Section>
      <Section title="Empty Placeholder">
        <AwesomeButton
          style={styles.button}
          type="primary"
        />
        <AwesomeButton
          style={styles.button}
          type="secondary"
        />
      </Section>
      <Section title="Sizes">
        <AwesomeButton
          style={styles.button}
          size="small"
          type="primary"
        >
          Primary Small
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          type="secondary"
          size="large"
        >
          Secondary Large
        </AwesomeButton>
      </Section>
    </Container>
  );
}

example.navigationOptions = ({ navigation }) => {
  return {
    title: 'Blue Theme',
    headerStyle: {
      backgroundColor: '#1775c8',
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
          onPress={() => navigation.navigate('Example2')}
          color="#fff"
        >
          Next
        </AwesomeButton>
      ),
  };
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    marginBottom: 8,
  },
});
