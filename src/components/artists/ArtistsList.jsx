import React from 'react';
import Artist from './Artist';

const ArtistsList = () => {
  const artist = {
    name: 'Dude',
    id: '123'
  }
  return (
    <>
      <h1>Artist List</h1>
      <Artist {...artist} />
    </>
  )
}

export default ArtistsList;
