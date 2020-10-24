import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HANGMAN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontFamily: 'RobotoMono-Regular',
    fontSize: 45,
    letterSpacing: 8,
    fontWeight: 'bold',
  },
});

export default AppBar;
