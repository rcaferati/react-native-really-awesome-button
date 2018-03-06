import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import AwesomeButton from './src/index';
import AwesomeButtonC137 from './src/themes/c137';
import AwesomeButtonRick from './src/themes/rick';
import AwesomeButtonBlue from './src/themes/blue';
import AwesomeButtonCartman from './src/themes/cartman';

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
        <AwesomeButton
          progress
          style={style.button}
          onPress={(next) => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
        >
          This is my Button
        </AwesomeButton>
        <AwesomeButtonBlue
          style={style.button}
          progress
          onPress={(next) => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
        >
          Hello
        </AwesomeButtonBlue>
        <AwesomeButtonBlue
          type="secondary"
          style={style.button}
        >
          Hello
        </AwesomeButtonBlue>
        <AwesomeButtonRick
          type="secondary"
          style={style.button}
        >
          Goto Next Page
        </AwesomeButtonRick>
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
          <Text
            style={{
              color:'#2e84b1',
              fontWeight:'bold'
            }}
          >
            Rick Button Primary
          </Text>
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
          C137 Primary
        </AwesomeButtonC137>
        <AwesomeButtonC137
          style={style.button}
          onPress={() => {
            this.setState({
              placeholder: 'Placeholder'
            })
          }}
        >
          {this.state.placeholder}
        </AwesomeButtonC137>
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
          Cartman Primary
        </AwesomeButtonCartman>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F2F2F',
  },
  button: {
    marginTop: 20.
  }
});
