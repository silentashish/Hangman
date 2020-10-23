import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Misses = ({letters}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{letters.join('')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 24,
  },
});

export default Misses;
