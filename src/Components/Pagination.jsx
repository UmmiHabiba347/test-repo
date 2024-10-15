import React from 'react';

const Pagination = () => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          className="px-4 py-2 bg-transparent text-white font-semibold border-0 hover:border-2 hover:border-white hover:rounded-full transition duration-200"
        >
          {page}
        </button>
      ))}
      <button
        className="px-4 py-2 bg-transparent text-white font-semibold border-0 hover:border-2 hover:border-white hover:rounded-full transition duration-200"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
