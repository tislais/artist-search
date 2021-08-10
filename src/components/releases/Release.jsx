import React from 'react'

const Release = ({ id, name }) => {

  return (
    <li key={id}>
      <h1>{name}</h1>
      <img src={`http://coverartarchive.org/release/${id}/front
`} alt={name + ' image'} />
    </li>
  )
}

export default Release;