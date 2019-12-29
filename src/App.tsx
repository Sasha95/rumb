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
      <Route path="/rumb/">
        <Header />
      </Route>
      <Switch>
        <Route exact path="/rumb/">
          <MainTravel />
        </Route>
        <Route path="/rumb/search/">
          <Search />
        </Route>
        <Route path="/rumb/order:orderId/">
          <Order />
        </Route>
        <Route path="/rumb/howItWorks/">
          {/* <HowItWorks /> */}
        </Route>
        <Route path="/rumb/reviews/">
          {/* <Reviews /> */}
        </Route>
        <Route path="/rumb/about/">
          {/* <About /> */}
        </Route>
        <Route path="/rumb/trips/">
          {/* <Trips /> */}
        </Route>
        <Route path="/rumb/signIn/">
          {/* <SignIn /> */}
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
