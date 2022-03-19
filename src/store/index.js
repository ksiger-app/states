import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import Reducer from "./reducers";
let composeEnhancer = compose;
if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const Reducers = {
  appData: Reducer,
};

export const Store = createStore(
  combineReducers(Reducers),
  composeEnhancer(applyMiddleware(thunk))
);
export const persistor = persistStore(Store);
