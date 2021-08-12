import React, { useEffect, useState } from 'react';
import Release from './Release';
import { useParams } from 'react-router-dom';
import { fetchReleases } from '../../services/searchApi';
import Pagination from '../pagination/Pagination';

const ReleasesList = () => {
  const { artistName, artistId } = useParams();

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
    <Release {...release} artistId={artistId} artistName={artistName}/>
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
