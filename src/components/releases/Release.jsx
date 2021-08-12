import React from 'react'
import { Link } from 'react-router-dom';

const Release = ({ artistName, artistId, id, title }) => {

  return (
    <li key={id}>
      <Link to={`/${artistName}/${artistId}/${id}`}>
        <h1>{title}</h1>
        <img src={`http://coverartarchive.org/release/${id}/front`} alt={title + ' image'} />
      </Link>
    </li>
  )
}

export default Release;
