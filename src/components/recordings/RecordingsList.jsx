import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchRecordings } from '../../services/searchApi';
import Recording from './Recording';

const RecordingsList = () => {
  const { artistId, releaseId } = useParams();
  const [recordings, setRecordings] = useState([]);

  let location = useLocation();
  let artist = location.state.artist;

  useEffect(() => {
    fetchRecordings(releaseId)
      .then(setRecordings)
  }, [releaseId])

  const recordingsElements = recordings.map(recording => (
    <Recording {...recording} artist={artist} releaseId={releaseId} artistId={artistId}/>
  ))

  return (
    <>
      <h1>hello</h1>
      <ul>{recordingsElements}</ul>
    </>
  )
}

export default RecordingsList;
