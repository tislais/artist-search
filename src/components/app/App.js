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
        <Route exact path="/:artistId" component={ReleasesList} />
        <Route exact path="/:artistId/:releaseId" component={RecordingsList} />
        <Route exact path="/:artistId/:releaseId/:recordingId" component={LyricsPage} />
      </Switch>
    </>
  );
}

export default App;
