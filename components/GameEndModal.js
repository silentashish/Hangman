import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GameContext} from '../utils/gameContext';

const GameEndModal = () => {
  const {state, dispatch} = useContext(GameContext);

  const sentanceCase = (sentance) => {
    const first = sentance.charAt(0).toUpperCase();
    const rest = sentance.slice(1);
    return first + rest;
  };

  return (
    <View style={[styles.container, styles.gameend]}>
      {state.gameover === 'win' ? (
        <View>
          <Text style={styles.gameendText}>You Won!</Text>
          <Text style={[styles.gameendText, styles.messageText]}>
            {state.word}
          </Text>
          <Text style={[styles.gameendText, styles.descText]}>
            {sentanceCase(state.def)}
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.gameendText}>Game Over!</Text>
          <Text style={[styles.gameendText, styles.messageText]}>
            The word was{'\n'}
            {state.word}
          </Text>
          <Text style={[styles.gameendText, styles.descText]}>
            {sentanceCase(state.def)}
          </Text>
        </View>
      )}
      <View style={styles.newgameShadow} />
      <Text
        style={styles.newgameButton}
        onPress={() => dispatch({type: 'NEW_GAME'})}>
        PLAY AGAIN
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameend: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  gameendText: {
    backgroundColor: '#214252',
    color: '#fff',
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 40,
  },
  messageText: {
    fontSize: 30,
    paddingBottom: 20,
  },
  descText: {
    fontSize: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  newgameButton: {
    marginHorizontal: 70,
    top: -75,
    backgroundColor: '#fff',
    fontFamily: 'Avenir',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
  },
  newgameShadow: {
    backgroundColor: '#000',
    left: 5,
    top: -20,
    height: 50,
    marginHorizontal: 70,
  },
});

export default GameEndModal;
