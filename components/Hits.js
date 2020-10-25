import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Hits = ({letters}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {letters.map(letter => (letter ? letter : '_')).join(' ')}
      </Text>
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
    fontFamily: 'Avenir',
    fontSize: 24,
  },
});

export default Hits;
