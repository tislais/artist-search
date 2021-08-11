import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ name, id, country }) => {
  return (
    <li key={id}>
      <Link to={`/artist/${id}`}>
        <h2>{name}</h2>
        <p>{country}</p>
      </Link>
    </li>
  )
}

export default Artist;
