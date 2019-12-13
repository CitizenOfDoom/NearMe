import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScreenA = () => (
  <View style={styles.container}>
    <Text>This is Screen A!</Text>
  </View>
)
//add 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
