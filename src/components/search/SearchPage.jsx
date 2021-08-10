import React from 'react';
import ArtistsList from '../artists/ArtistsList';
import Pagination from '../pagination/Pagination';
import SearchForm from './SearchForm';

const SearchPage = () => {
  return (
    <>
      <SearchForm />
      <Pagination />
      <ArtistsList />
    </>
  )
}

export default SearchPage;
