import { Switch, Route } from 'react-router';
import React, { useEffect } from 'react';

import { store } from "store";

import AppLayout from 'components/PageLayout';
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      store.catsStore.getCats();
    }
    return () => { isSubscribed = false; }
  }, []);
  return (
    <AppLayout
      render={() => (
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      )}
    />
  );
}

export default App;
