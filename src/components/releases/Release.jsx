import React from 'react'
import { Link } from 'react-router-dom';

const Release = ({ artistId, id, title, artist }) => {

  return (
    <li key={id}>
      <Link to={{
        pathname: `/${artistId}/${id}`,
        state: {
          artist: artist
        }
      }}>
        <h1>{title}</h1>
        <img src={`http://coverartarchive.org/release/${id}/front`} alt={title + ' image'} />
      </Link>
    </li>
  )
}

export default Release;
