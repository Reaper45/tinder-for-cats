import { Switch, Route } from 'react-router';
import React, { useEffect } from 'react';

import { store } from "store";

import AppLayout from 'components/PageLayout';
import Home from "./pages/Home";
import GetIn from "./pages/GetIn";

function App() {
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      store.catsStore.getCats();
    }
    return () => { isSubscribed = false; }
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={GetIn} />
      <Route
        path="/home"
        render={() => <AppLayout render={() => <Home />} />}
      />
    </Switch>
  );
}

export default App;
