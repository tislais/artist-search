import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSong } from '../../services/searchApi';

const LyricsPage = () => {

  const {artistName, recordingTitle} = useParams();

  const [lyrics, setLyrics] = useState('');
  const [coverArt, setCoverArt] = useState('');

  useEffect(async () => {
    const lyricsData = await fetchSong(artistName, recordingTitle);
    setLyrics(lyricsData.lyrics);
    setCoverArt(lyricsData.coverArt);
  }, [artistName, recordingTitle])

  return (
    <>
      <h1>{artistName} - {recordingTitle} Lyrics</h1>
      <img src={coverArt} alt={recordingTitle} />
      <p data-testid="lyrics">{lyrics}</p>
    </>
  )
}

export default LyricsPage;
