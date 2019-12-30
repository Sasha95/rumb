import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { configureStore } from './core/common/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { IAppDispatch } from './core/mainReducer';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';

export const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

export const { store, persistor } = configureStore();

export const dispatch: IAppDispatch = store.dispatch;


ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </Router>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
