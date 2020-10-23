import words from './words';
import alphabet from './alphabet';

const randomWord = () => {
  const word = words[Math.floor(Math.random() * Math.floor(words.length - 1))];
  return word.toUpperCase().split('');
};

const fillHits = word => word.map(letter => null);

export const initialState = {
  active: false,
  misses: [],
  hits: [],
  word: '',
  available: [],
  gameover: null,
  def: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      const newWord = randomWord();
      const newAvailable = [...alphabet.flat()];
      return {
        ...initialState,
        active: true,
        word: newWord,
        hits: fillHits(newWord),
        available: newAvailable,
        gameover: null,
      };
    case 'NEW_HIT':
      return {
        ...state,
        hits: action.payload.hits,
        available: action.payload.available,
      };
    case 'NEW_MISS':
      return {
        ...state,
        misses: [...state.misses, action.payload.letter],
        available: action.payload.available,
      };
    case 'SET_DEF':
      return {...state, def: action.payload};
    case 'GAME_OVER':
      return {...state, gameover: 'lose'};
    case 'WIN_GAME':
      return {...state, gameover: 'win'};
    default:
      return state;
  }
};
