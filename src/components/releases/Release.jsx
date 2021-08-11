import React from 'react'
import { Link } from 'react-router-dom';

const Release = ({ id, title }) => {

  return (
    <li key={id}>
      <Link to={`/release/${id}`}>
        <h1>{title}</h1>
        <img src={`http://coverartarchive.org/release/${id}/front`} alt={title + ' image'} />
      </Link>
    </li>
  )
}

export default Release;
