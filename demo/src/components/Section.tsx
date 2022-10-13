import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function container({ title, children }: any) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text}>{title.toUpperCase()}</Text>
      </View>
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#444',
    fontSize: 12,
  },
  container: {
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 24,
  },
  header: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#444',
    width: '60%',
    alignItems: 'flex-start',
    paddingVertical: 4,
    marginBottom: 8,
  },
});
