import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReleasesList from '../releases/ReleasesList';
import SearchPage from '../search/SearchPage';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/:id/releases" component={ReleasesList} />
      </Switch>
    </>
  );
}

export default App;
