import React, { useState } from 'react';
import { fetchArtists } from '../../services/searchApi';
import ArtistsList from '../artists/ArtistsList';
import Pagination from '../pagination/Pagination';
import SearchForm from './SearchForm';


const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);
  // const [loading, setLoading] = useState(true);

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { artists } = await fetchArtists(search);
    setArtists(artists);
    // setLoading(false);
  }

  // if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <SearchForm 
        onInputChange={handleInputChange} 
        onFormSubmit={handleFormSubmit}
        search={search} />
      <Pagination />
      <ArtistsList artists={artists} />
    </>
  )
}

export default SearchPage;
