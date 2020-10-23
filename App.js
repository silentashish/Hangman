import React from 'react';
import {GameProvider} from './utils/gameContext';
import Home from './screens/Home';

const App = () => {
  return (
    <GameProvider>
      <Home />
    </GameProvider>
  );
};

export default App;
