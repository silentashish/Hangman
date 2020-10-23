import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Hits from '../components/Hits';
import Graphic from '../components/Graphic';
import Misses from '../components/Misses';
import Keyboard from '../components/Keyboard';
import {GameContext} from '../utils/gameContext';
import GameEndModal from '../components/GameEndModal';

const Game = ({hits, misses}) => {
  const {state, dispatch} = useContext(GameContext);

  useEffect(() => {
    const getDef = async word => {
      const res = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/sd3/json/${word}?key=9b7e2d84-d88e-42ac-b22d-cd41cc72966f`,
      );
      const data = await res.json();
      const shortdef = data[0].shortdef
        ? data[0].shortdef[0]
        : 'No definition available.';
      dispatch({type: 'SET_DEF', payload: shortdef});
    };
    getDef(state.word.join(''));
  }, [dispatch, state.word]);

  return (
    <View style={styles.container}>
      <View style={styles.misses}>
        <Misses letters={misses} />
      </View>
      <View style={styles.graphic}>
        <Graphic />
      </View>
      <View style={styles.hits}>
        <Hits letters={hits} />
      </View>
      <View style={styles.keyboard}>
        <Keyboard />
      </View>
      {state.gameover && (
        <View style={styles.modal}>
          <GameEndModal />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  misses: {
    flex: 2,
    backgroundColor: '#fff',
  },
  graphic: {
    flex: 5,
    backgroundColor: '#fff',
  },
  hits: {
    flex: 2,
    backgroundColor: '#fff',
  },
  keyboard: {
    flex: 4,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  modal: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Game;
