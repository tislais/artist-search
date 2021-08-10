import React, { useEffect, useState } from 'react';
import Release from './Release';
import { useParams } from 'react-router-dom';
import { fetchReleases } from '../../services/searchApi';


const ReleasesList = () => {
  const { id } = useParams()
  console.log(id)
  const [releases, setReleases] = useState({})


  useEffect(() => {
    fetchReleases(id)
      .then(setReleases)
  }, [id])

  const releasesElements = releases.map(release => (

    <Release {...release} />

  ))

  return (
    <>
      <h1>HIIII</h1>
      <ul>
        {releasesElements}
      </ul>
    </>
  )
}

export default ReleasesList;