import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HANG_AN</Text>
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
    fontSize: 50,
    letterSpacing: 6,
  },
});

export default AppBar;
