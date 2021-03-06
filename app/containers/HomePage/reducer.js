/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import {fromJS} from 'immutable';

import {
  CHANGE_USERNAME,
  ADD_COUNTER
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  counter:0
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    case ADD_COUNTER:
      return state
        .set('counter',state.counter+1)
    default:
      return state;
  }
}

export default homeReducer;
