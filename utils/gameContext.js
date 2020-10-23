import React, {useReducer} from 'react';
import {reducer, initialState} from './reducer';

const GameContext = React.createContext(initialState);

function GameProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{state, dispatch}}>
      {props.children}
    </GameContext.Provider>
  );
}
export {GameContext, GameProvider};
