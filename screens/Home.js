import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Game from './Game';
import Menu from './Menu';
import AppBar from '../components/AppBar';
import {GameContext} from '../utils/gameContext';
import LottieView from 'lottie-react-native';
import Sound from 'react-native-sound';

const Home = () => {
  Sound.setCategory('Playback');

  const {state, dispatch} = useContext(GameContext);

  const handleNewGame = () => {
    dispatch({type: 'NEW_GAME'});
  };

  useEffect(() => {
    var whoosh = new Sound(require('../assets/music/background.mp3'), () => {
      whoosh.setNumberOfLoops(-1);
      whoosh.setVolume(1);
      whoosh.play((error) => {
        console.log(console.error(error));
      });
    });
    return () => {
      whoosh.pause();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <AppBar />
      </View>
      <View style={styles.container}>
        {state.active ? (
          <Game misses={state.misses} hits={state.hits} />
        ) : (
          <>
            <View style={{width: '100%', height: 400}}>
              <LottieView
                source={require('../assets/animation/start.json')}
                autoPlay
                loop
              />
            </View>
            <Menu newGame={handleNewGame} />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 13,
    backgroundColor: '#214252',
  },
  appBar: {
    flex: 1.5,
    backgroundColor: '#f05454',
  },
});

export default Home;
