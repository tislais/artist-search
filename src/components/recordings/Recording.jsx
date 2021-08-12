import React from 'react';
import { Link } from 'react-router-dom';

const Recording = ({artistId, releaseId, id, title, artist }) => {
  return ( 
  <li key={id}>
    <Link to={{
      pathname: `/${artistId}/${releaseId}/${id}`,
      state: {
        artist: artist,
        title: title
}}}>
    <h1>{title}</h1>
    </Link>
  </li>
  )
}

export default Recording;
