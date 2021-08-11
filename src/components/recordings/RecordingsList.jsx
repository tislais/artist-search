import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecordings } from '../../services/searchApi';
import Recording from './Recording';

const RecordingsList = () => {
  const {id} = useParams();
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    fetchRecordings(id)
      .then(setRecordings)
  }, [id])

  const recordingsElements = recordings.map(recording => (
    <Recording {...recording}/>
  ))

  return (
    <>
      <h1>hello</h1>
      <ul>{recordingsElements}</ul>
    </>
  )
}

export default RecordingsList;
