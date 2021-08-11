import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchRecordings } from '../../services/searchApi';
import Recording from './Recording';

const RecordingsList = () => {
  const {id} = useParams();
  const [recordings, setRecordings] = useState([]);
  
  let location = useLocation();
  let artist = location.state.artist;
  console.log('RecordingsList ', artist);

  useEffect(() => {
    fetchRecordings(id)
      .then(setRecordings)
  }, [id])

  const recordingsElements = recordings.map(recording => (
    <Recording {...recording} artist={artist} />
  ))

  return (
    <>
      <h1>hello</h1>
      <ul>{recordingsElements}</ul>
    </>
  )
}

export default RecordingsList;
