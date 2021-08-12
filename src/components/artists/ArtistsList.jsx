import React from 'react';
import Artist from './Artist';

const ArtistsList = ({ artists }) => {

  const artistsElements = artists.map((artist) => {
    return <Artist {...artist} />
  });

  return (
    <>
      {artists
        ? <ul>{artistsElements}</ul>
        : <></>}
    </>
  )
}

export default ArtistsList;
