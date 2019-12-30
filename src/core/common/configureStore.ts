import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "../rootReducer";
import { getAppInitialState } from "../appState";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
export const history = createBrowserHistory();

const middleware = [thunkMiddleware];
const initialState = getAppInitialState();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["current"]
};

const composeEnhancers =
  process.env.NODE_ENV === "production"
    ? compose
    : composeWithDevTools({
        shouldHotReload: false
      });

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = compose(
  composeEnhancers(applyMiddleware(...middleware))
);

export default () => {
  const store = createStore(persistedReducer, initialState, composedEnhancers);
  return { store, persistor: persistStore(store) };
};