import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSong } from '../../services/searchApi';



const LyricsPage = () => {

  let location = useLocation();
  let artist = location.state.artist;
  let title = location.state.title;

  useEffect(() => {
    const lyrics = fetchSong(artist, title)
    console.log(lyrics)

  }, [artist, title])

  return (
    <>
      <h1>Hello!</h1>
    </>
  )
}

export default LyricsPage;
