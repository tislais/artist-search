import React from 'react';

const SearchForm = ({ onInputChange, onFormSubmit, search }) => {
  return (
    <form data-testid="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Search an Artist"
        type="text"
        value={search}
        onChange={onInputChange}
        className={input} />
      <button data-testid="form-button" className={button}>Go</button>
    </form>
  )
}

const input = `
  border-2
  py-1
  px-2
  w-4/6
`;

const button = `
  py-1
  px-6
  ml-2
  border-2
  border-pink-500
  hover:border-pink-600
  rounded-sm
  bg-pink-500
  text-white
  font-semibold
  hover:bg-pink-600
`;

export default SearchForm;
