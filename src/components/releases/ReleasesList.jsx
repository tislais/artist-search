import React, { useEffect, useState } from 'react';
import Release from './Release';
import { useLocation, useParams } from 'react-router-dom';
import { fetchReleases } from '../../services/searchApi';
import Pagination from '../pagination/Pagination';

const ReleasesList = () => {
  const { artistId } = useParams();

  let location = useLocation();
  let artist = location.state.artist;

  const [releases, setReleases] = useState([])
  const [page, setPage] = useState(1)

  const handleNextClick = async () => {
    setPage((prevPage) => {
      return prevPage + 1
    })
    const releases = await fetchReleases(artistId, page);
    setReleases(releases);
  };

  const handlePrevClick = async () => {
    setPage((prevPage) => {
      return prevPage - 1
    })
    const releases = await fetchReleases(artistId, page);
    setReleases(releases);
  };

  useEffect(() => {
    fetchReleases(artistId, page)
      .then(setReleases);
  }, [artistId, page]);

  const releasesElements = releases.map(release => (
    <Release {...release} artist={artist} artistId={artistId}/>
  ))

  return (
    <>
      <Pagination onNextClick={handleNextClick} onPrevClick={handlePrevClick} page={page} />
      <ul>
        {releasesElements}
      </ul>
    </>
  )
}

export default ReleasesList;
