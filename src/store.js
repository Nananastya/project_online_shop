import { rootReducer } from './redux/reducers/rootReducer';
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))
