import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchPage from '../search/SearchPage';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SearchPage}/>
      </Switch>
    </>
  );
}

export default App;
