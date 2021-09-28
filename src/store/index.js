import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducer/RootReducer';
import CheckToken from '../store/Middleware/CheckToken';
import { composeWithDevTools } from 'redux-devtools-extension';
import setHeader from './Middleware/setHeader';
const Middleware = [setHeader, CheckToken, thunk];

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;
