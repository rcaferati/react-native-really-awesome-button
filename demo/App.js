import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import AwesomeButtonC137 from 'react-native-really-awesome-button/src/themes/c137';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AwesomeButtonBlue from 'react-native-really-awesome-button/src/themes/blue';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: '',
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={style.container}>
        <AwesomeButtonBlue
          style={style.button}
          progress
          onPress={(next) => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
        >
          Blue Progress
        </AwesomeButtonBlue>
        <AwesomeButtonBlue
          type="secondary"
          style={style.button}
        >
          Blue Secondary
        </AwesomeButtonBlue>
        <AwesomeButtonCartman
          style={style.button}
          type="primary"
        >
          Cartman Primary
        </AwesomeButtonCartman>
        <AwesomeButtonCartman
          style={style.button}
          type="secondary"
        >
          Cartman Secondary
        </AwesomeButtonCartman>
        <AwesomeButtonRick
          progress
          type="primary"
          onPress={(next) => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          style={style.button}
        >
          Rick Progress
        </AwesomeButtonRick>
        <AwesomeButtonRick
          type="secondary"
          style={style.button}
        >
          Rick Secondary
        </AwesomeButtonRick>
        <AwesomeButtonC137
          style={style.button}
        >
          C137 Primary
        </AwesomeButtonC137>
        <AwesomeButtonC137
          type="secondary"
          style={style.button}
        >
          C137 Secondary
        </AwesomeButtonC137>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
  button: {
    marginTop: 12,
    marginBottom: 12,
  }
});
