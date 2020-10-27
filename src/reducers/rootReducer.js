import { combineReducers } from 'redux';

import roomReducer from './roomReducer';
import userReducer from './userReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  room: roomReducer,
  user: userReducer,
  UI: uiReducer
});