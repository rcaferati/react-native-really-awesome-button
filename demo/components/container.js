import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

export default function container({ children }) {
  return (
    <View style={style.container}>
      <ScrollView contentContainerStyle={style.scrollView}>
        {children}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollView: {
    paddingTop: 30,
    paddingBottom: 50,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FAFAFA'
  },
});
