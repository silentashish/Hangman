import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GameContext} from '../utils/gameContext';

const Key = ({letter}) => {
  const {state, dispatch} = useContext(GameContext);
  let {word, hits, misses, available} = state;

  const checkAvailable = () => available.includes(letter);

  const checkGameEnd = missLength => {
    if (missLength >= 6) {
      dispatch({type: 'GAME_OVER'});
    }
    if (word.join('') === hits.join('')) {
      dispatch({type: 'WIN_GAME'});
    }
  };

  const tryLetter = () => {
    if (word.includes(letter)) {
      word.map((el, idx) => {
        if (el === letter) {
          hits[idx] = letter;
        }
      });
      dispatch({type: 'NEW_HIT', payload: {hits, available}});
      checkGameEnd();
    } else {
      dispatch({type: 'NEW_MISS', payload: {letter, available}});
      checkGameEnd(misses.length + 1);
    }
  };

  const handleTouch = () => {
    if (!checkAvailable()) {
      return null;
    }
    available = available.filter(x => x !== letter);
    tryLetter();
    dispatch({type: 'TRY_LETTER', payload: letter});
  };

  return (
    <View style={styles.container}>
      <View style={styles.shadow} />
      {letter !== ' ' && state.available.includes(letter) ? (
        <Text style={styles.key} onPress={handleTouch}>
          {letter}
        </Text>
      ) : (
        <Text style={[styles.key, styles.greyed]}>{letter}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  key: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#eee',
    margin: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    fontFamily: 'Avenir',
  },
  shadow: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 45,
    height: 45,
    backgroundColor: '#000',
  },
  greyed: {
    color: '#bbb',
  },
});

export default Key;
