import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'


const Pagination = ({ page, onNextClick, onPrevClick }) => {
  return (
    <section className="flex-row flex gap-2">
      <button className={button} onClick={onPrevClick} disabled={page <= 1}>
        <ChevronLeftIcon className="h-4" />
      </button>
      <span>{page}</span>
      <button className={button} onClick={onNextClick}>
        <ChevronRightIcon className="h-4" />
      </button>
    </section>
  )
}

const button = `
  bg-gray-300
  rounded-full
  py-1
  px-1
`;

export default Pagination;
