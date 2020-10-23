import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Menu = ({newGame}) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow} />
      <Text style={styles.button} onPress={newGame}>
        NEW GAME
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 60,
  },
  button: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    fontSize: 30,
    borderWidth: 2,
    borderColor: '#000',
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  shadow: {
    position: 'relative',
    top: 4,
    left: 4,
    right: 0,
    height: 60,
    backgroundColor: '#000',
  },
});

export default Menu;
