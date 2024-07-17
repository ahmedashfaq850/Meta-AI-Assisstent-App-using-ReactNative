import {combineReducers} from 'redux';
import ChatSlice from './reducers/ChatSlice';

const rootReducer = combineReducers({
  chat: ChatSlice,
});

export default rootReducer;