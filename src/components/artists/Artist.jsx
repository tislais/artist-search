import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ name, id }) => {
  return (
    <li key={id}>
      <Link to={`/${id}/releases`}>
        <h2>{name}</h2>
      </Link>
    </li>
  )
}

export default Artist;
