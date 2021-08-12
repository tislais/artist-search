import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LyricsPage from '../lyrics/LyricsPage';
import RecordingsList from '../recordings/RecordingsList';
import ReleasesList from '../releases/ReleasesList';
import SearchPage from '../search/SearchPage';


function App() {

  return (
    <div className="max-w-sm mx-auto p-8 bg-white my-16 rounded-xl shadow-lg">
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/:artistName/:artistId" component={ReleasesList} />
        <Route exact path="/:artistName/:artistId/:releaseId" component={RecordingsList} />
        <Route exact path="/:artistName/:artistId/:releaseId/:recordingTitle/:recordingId" component={LyricsPage} />
      </Switch>
    </div>
  );
}

export default App;
