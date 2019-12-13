import React from 'react';
import { Header } from './modules/header/Header';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
        <Route path="/">
          <Header />
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
    </Router>
  );
}

export default App;
