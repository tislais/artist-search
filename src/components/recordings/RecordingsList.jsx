import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecordings } from '../../services/searchApi';
import Recording from './Recording';

const RecordingsList = () => {
  const { artistName, artistId, releaseId } = useParams();
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    fetchRecordings(releaseId)
      .then(setRecordings)
  }, [releaseId])

  const recordingsElements = recordings.map(recording => (
    <Recording {...recording} releaseId={releaseId} artistId={artistId} artistName={artistName}/>
  ))

  return (
    <>
      <h1>hello</h1>
      <ul>{recordingsElements}</ul>
    </>
  )
}

export default RecordingsList;
