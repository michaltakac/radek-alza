
import { handleActions } from 'redux-actions';
import { Record } from 'immutable';

const InitialState = Record({
  showMore: false
});

const initialState = new InitialState();

export default handleActions({
  'show more' (state = initialState, action) {
    if (!(state instanceof InitialState)) return initialState;
    return state.update('showMore', showMore => !showMore);
  }
}, initialState)
