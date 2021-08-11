import React from 'react';

const Pagination = ({ page, onNextClick, onPrevClick }) => {
  return(
    <>
      <button className={button} onNextClick={onNextClick}>prev</button>
      <span>{page}</span>
      <button className={button} onPrevClick={onPrevClick} disabled={page <= 1}>next</button>
    </>
  )
}

const button = `
  bg-gray-300
  rounded-full
  py-1
  px-4
`;

export default Pagination;
