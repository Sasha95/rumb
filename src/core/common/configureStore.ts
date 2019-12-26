import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "../rootReducer";
import { getAppInitialState } from "../appState";
export const history = createBrowserHistory();

const middleware = [thunkMiddleware];
const initialState = getAppInitialState();

const composeEnhancers =
  process.env.NODE_ENV === "production"
    ? compose
    : composeWithDevTools({
        shouldHotReload: false
      });

const composedEnhancers = compose(
  composeEnhancers(applyMiddleware(...middleware))
);

export default () => {
  const store = createStore(rootReducer, initialState, composedEnhancers);
  return { store };
};