import React from 'react';
import ArtistsList from '../artists/ArtistsList';
import Pagination from '../pagination/Pagination';
import SearchForm from './SearchForm';

const Search = () => {
  return (
    <>
      <SearchForm />
      <Pagination />
      <ArtistsList />
    </>
  )
}

export default Search;
