import React, {useContext} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {GameContext} from '../utils/gameContext';

const Grpahic = () => {
  const {state} = useContext(GameContext);

  const link = () => {
    switch (state.misses.length) {
      case 0:
        return require('./images/img0.png');
      case 1:
        return require('./images/img1.png');
      case 2:
        return require('./images/img2.png');
      case 3:
        return require('./images/img3.png');
      case 4:
        return require('./images/img4.png');
      case 5:
        return require('./images/img5.png');
      case 6:
        return require('./images/img6.png');
      default:
        return require('./images/img0.png');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={link()} resizeMode="contain" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {flex: 1},
});

export default Grpahic;
