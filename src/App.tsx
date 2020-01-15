import React from 'react';
import { Header } from './modules/header/Header';
import { Route, Switch, Redirect } from "react-router-dom";
import { MainTravel } from './modules/mainTravel';
import { Search } from './modules/search';
import { Order } from './modules/order/Order';
import { Payment } from './modules/order/payment/Payment';

const App: React.FC = () => {
  return (
    <>
      <Route path="/rumb">
        <Header />
      </Route>
      <Redirect from="/" to="/rumb" />
      <Switch>
        <Route exact path="/rumb">
          <MainTravel />
        </Route>
        <Route path="/rumb/search/">
          <Search />
        </Route>
        <Route path="/rumb/order:orderId/">
          <Order />
        </Route>
        <Route path="/rumb/payment:orderId/">
          <Payment />
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
    </>
  );
}

export default App;
