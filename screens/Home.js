import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Game from './Game';
import Menu from './Menu';
import AppBar from '../components/AppBar';
import {GameContext} from '../utils/gameContext';

const Home = () => {
  const {state, dispatch} = useContext(GameContext);

  const handleNewGame = () => {
    dispatch({type: 'NEW_GAME'});
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <AppBar />
      </View>
      <View style={styles.container}>
        {state.active ? (
          <Game misses={state.misses} hits={state.hits} />
        ) : (
          <Menu newGame={handleNewGame} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 13,
  },
  appBar: {
    flex: 1.5,
    backgroundColor: '#6600ff',
  },
});

export default Home;
