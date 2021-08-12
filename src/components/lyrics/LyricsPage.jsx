import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchSong } from '../../services/searchApi';

const LyricsPage = () => {

  // let location = useLocation();
  // let artist = location.state.artist;
  // let title = location.state.title;

  const {artistName, recordingTitle} = useParams();


  const [lyricsData, setLyricsData] = useState({})
  const [lyrics, setLyrics] = useState('');
  const [coverArt, setCoverArt] = useState('');

  useEffect(async () => {
    const lyricsData = await fetchSong(artistName, recordingTitle);
    setLyrics(lyricsData.lyrics);
    setCoverArt(lyricsData.coverArt);

    // console.log('data', lyricsData)
    // console.log('lyrics', lyricsData.lyrics)
    // console.log('coverArt', lyricsData.coverArt)
  }, [artistName, recordingTitle])

  return (
    <>
      <h1>Hello!</h1>
      <img src={coverArt} alt={recordingTitle} />
      <p>{lyrics}</p>
    </>
  )
}

export default LyricsPage;
