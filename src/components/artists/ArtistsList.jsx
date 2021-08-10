import React from 'react';
import Artist from './Artist';

const ArtistsList = ({ artists }) => {
  
  const artistsElements = artists.map((artist) => {
    return <Artist {...artist} />
  });

  return (
    <>
      <h1>Artist List</h1>
      <ul>
        { artistsElements }
      </ul>
    </>
  )
}

export default ArtistsList;
