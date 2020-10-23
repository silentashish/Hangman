import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import alphabet from '../utils/alphabet';
import Key from './Key';

const Keyboard = () => {
  return (
    <View style={styles.container}>
      {alphabet.map((row, x) => (
        <View key={x} style={styles.row}>
          {row.map((col, y) => (
            <Key key={`${x}-${y}`} letter={col} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    marginHorizontal: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Keyboard;
