import React from 'react';
import { Link } from 'react-router-dom';

const Recording = ({artistName, artistId, releaseId, id, title }) => {
  return ( 
  <li key={id}>
    <Link to={`/${artistName}/${artistId}/${releaseId}/${title}/${id}`}>
    <h1>{title}</h1>
    </Link>
  </li>
  )
}

export default Recording;
