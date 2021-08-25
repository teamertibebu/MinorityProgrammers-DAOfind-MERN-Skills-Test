import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DaoList from './Components/DaoList';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <DaoList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
