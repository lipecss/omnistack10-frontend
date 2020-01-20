import React from 'react';
import './styles.css'


const Pagination = ({ devsPerPage, totalDevs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDevs / devsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        <ul className='pagination justify-content-center'>
            {pageNumbers.map(number => (
            <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='#!' className='page-link'>
                {number}
                </a>
            </li>
            ))}
        </ul>
    </nav>
  );
};

export default Pagination;