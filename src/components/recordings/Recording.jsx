import React from 'react';
import { Link } from 'react-router-dom';

const Recording = ({id, title, artist }) => {
  return ( 
  <li key={id}>
    <Link to={{
      pathname: `/recording/${id}`,
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
