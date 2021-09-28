import { combineReducers } from 'redux';
import Authentication from './AuthenReducer';
import RegisterReducer from './RegisterReducer';
import UserReducer from './UserReducer';
const RootReducer = combineReducers({
  Authentication,
  RegisterReducer,
  UserReducer,
});

export default RootReducer;
