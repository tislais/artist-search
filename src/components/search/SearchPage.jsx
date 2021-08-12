import React, { useEffect, useState } from 'react';
import { fetchArtists } from '../../services/searchApi';
import ArtistsList from '../artists/ArtistsList';
import Pagination from '../pagination/Pagination';
import SearchForm from './SearchForm';


const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(1);

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const artists = await fetchArtists(search, page);
    setArtists(artists);
  }

  const handleNextClick = async () => {
    setPage((prevPage) => {
      return prevPage + 1
    })
    const artists = await fetchArtists(search, page);
    setArtists(artists);
  };

  const handlePrevClick = async () => {
    setPage((prevPage) => {
      return prevPage - 1
    })
    const artists = await fetchArtists(search, page);
    setArtists(artists);
  };

  return (
    <>
      <SearchForm
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
        search={search} />
      <Pagination
        page={page}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick} />
      <ArtistsList artists={artists} />
    </>
  )
}

export default SearchPage;
