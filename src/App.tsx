import React, { useState } from 'react';
import { Header } from './modules/header/Header';
import { Route, Switch } from "react-router-dom";
import { MainTravel } from './modules/mainTravel';
import { Search } from './modules/search';
import { Order } from './modules/order/Order';
import Checkout from './components/payment/Checkout';
import { ICard } from './api/dto/Card';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ICard>();
  return (
    <>
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
        <Checkout selectedProduct={selectedProduct}/>
      </Switch>
    </>
  );
}

export default App;
