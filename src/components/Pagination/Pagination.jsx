import React from 'react';
import './pagination.css';

const Pagination = ({pagination, handlePagination}) => {
  return (
    <div className='pagination'>
      <button className='btn' onClick={() => handlePagination(pagination.prev)}>prev</button>
      <button className='btn' onClick={() => handlePagination(pagination.next)}>next</button>
    </div>
  )
}

export default Pagination