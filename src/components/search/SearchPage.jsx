import React, { useState } from 'react';
import ArtistsList from '../artists/ArtistsList';
import Pagination from '../pagination/Pagination';
import SearchForm from './SearchForm';


const SearchPage = () => {
  const [search, setSearch] = useState();

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  }

  return (
    <>
      <SearchForm onInputChange={handleInputChange} search={search} />
      <Pagination />
      <ArtistsList />
    </>
  )
}

export default SearchPage;
