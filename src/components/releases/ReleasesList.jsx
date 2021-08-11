import React, { useEffect, useState } from 'react';
import Release from './Release';
import { useLocation, useParams } from 'react-router-dom';
import { fetchReleases } from '../../services/searchApi';
import Pagination from '../pagination/Pagination';

const ReleasesList = () => {
  const { id } = useParams();

  let location = useLocation();
  let artist = location.state.artist;

  const [releases, setReleases] = useState([])
  const [page, setPage] = useState(1)

  const handleNextClick = async () => {
    setPage((prevPage) => {
      return prevPage + 1
    })
    const releases = await fetchReleases(id, page);
    setReleases(releases);
  };

  const handlePrevClick = async () => {
    setPage((prevPage) => {
      return prevPage - 1
    })
    const releases = await fetchReleases(id, page);
    setReleases(releases);
  };

  useEffect(() => {
    fetchReleases(id, page)
      .then(setReleases);
  }, [id, page]);

  const releasesElements = releases.map(release => (
    <Release {...release} artist={artist} />
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
