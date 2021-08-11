import React from 'react';
import { useLocation } from 'react-router-dom';

const LyricsPage = () => {
  
  let location = useLocation();
  let artist = location.state.artist;
  let title = location.state.title;

  console.log(artist, title);

  return (
    <>
      <h1>Hello!</h1>
    </>
  )
}

export default LyricsPage;
