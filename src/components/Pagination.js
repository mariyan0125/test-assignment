import React from 'react';

export const Pagination = ({ dataPerPage, totalData, getPagination }) => {

  const pageNum = [];
  for(let i = 1; i<=Math.ceil(totalData / dataPerPage); i++) {
    pageNum.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNum.map(num => {
          return <li key={num} className="page-item">
            <button onClick={() => getPagination(num)}  className="page-link">
              {num}
            </button>
          </li>
        })}
      </ul>
    </nav>
  )
}
