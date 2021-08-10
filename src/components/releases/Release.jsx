import React from 'react'

const Release = ({ id, title }) => {

  return (
    <li key={id}>
      <h1>{title}</h1>
      <img src={`http://coverartarchive.org/release/${id}/front
`} alt={title + ' image'} />
    </li>
  )
}

export default Release;
