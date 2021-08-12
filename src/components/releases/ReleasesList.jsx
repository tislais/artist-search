import React, { useEffect, useState } from 'react';
import Release from './Release';
import { useLocation, useParams } from 'react-router-dom';
import { fetchReleases } from '../../services/searchApi';


const ReleasesList = () => {
  const { id } = useParams();

  let location = useLocation();
  let artist = location.state.artist;

  const [releases, setReleases] = useState([])
  
  useEffect(() => {
    fetchReleases(id)
      .then(setReleases);
  }, [id]);

  const releasesElements = releases.map(release => (
    <Release {...release} artist={artist} />
  ))

  return (
    <>
      <ul>
        {releasesElements}
      </ul>
    </>
  )
}

export default ReleasesList;
