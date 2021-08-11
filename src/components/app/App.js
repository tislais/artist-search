import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LyricsPage from '../lyrics/LyricsPage';
import RecordingsList from '../recordings/RecordingsList';
import ReleasesList from '../releases/ReleasesList';
import SearchPage from '../search/SearchPage';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/artist/:id" component={ReleasesList} />
        <Route exact path="/release/:id" component={RecordingsList} />
        <Route exact path="/recording/:id" component={LyricsPage}/>
      </Switch>
    </>
  );
}

export default App;
