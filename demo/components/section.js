import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

export default function container({ title, children }) {
  return (
    <View style={style.container}>
      <Text style={style.text}>{title}</Text>
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  container: {
    marginBottom: 12,
    alignItems: 'center',
  },
});
