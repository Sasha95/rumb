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
      <Route path="/">
        <Header />
      </Route>
      <Switch>
        <Route exact path="/">
          <MainTravel />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/order:orderId">
          <Order />
        </Route>
        <Route path="/howItWorks">
          {/* <HowItWorks /> */}
        </Route>
        <Route path="/reviews">
          {/* <Reviews /> */}
        </Route>
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/trips">
          {/* <Trips /> */}
        </Route>
        <Route path="/signIn">
          {/* <SignIn /> */}
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
