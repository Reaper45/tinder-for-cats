import { Switch, Route } from 'react-router';
import React from 'react';

import AppLayout from 'components/PageLayout';
import Home from "./pages/Home";

function App() {
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
