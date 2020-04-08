import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Detail from './pages/Detail';
function App() {
  return (
    <BrowserRouter basename="/do-the-five">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:pos">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
