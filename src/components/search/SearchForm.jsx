import React from 'react';

const SearchForm = ({ onInputChange, onFormSubmit, search }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input 
        type="text" 
        value={search} 
        onChange={onInputChange} 
        className={input} />
      <button className={button}>Go</button>
    </form>
  )
}

const input = `
  border-2
`;

const button = `
  py-1
  px-6
  rounded-full
  bg-pink-500
  text-white
  font-semibold
  hover:bg-pink-600
`;

export default SearchForm;
