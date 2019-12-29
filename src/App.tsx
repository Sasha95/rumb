import React from 'react';
import { Header } from './modules/header/Header';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import { MainTravel } from './modules/mainTravel';
import { Search } from './modules/search';
import { Order } from './modules/order/Order';
import { Provider } from 'react-redux';
import configureStore from './core/common/configureStore';
const { store } = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <Router>
      <Route path="https://sasha95.github.io/rumb/">
        <Header />
      </Route>
      <Switch>
        <Route exact path="https://sasha95.github.io/rumb/">
          <MainTravel />
        </Route>
        <Route path="https://sasha95.github.io/rumb/search">
          <Search />
        </Route>
        <Route path="https://sasha95.github.io/rumb/order:orderId">
          <Order />
        </Route>
        <Route path="https://sasha95.github.io/rumb/howItWorks">
          {/* <HowItWorks /> */}
        </Route>
        <Route path="https://sasha95.github.io/rumb/reviews">
          {/* <Reviews /> */}
        </Route>
        <Route path="https://sasha95.github.io/rumb/about">
          {/* <About /> */}
        </Route>
        <Route path="https://sasha95.github.io/rumb/trips">
          {/* <Trips /> */}
        </Route>
        <Route path="https://sasha95.github.io/rumb/signIn">
          {/* <SignIn /> */}
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
