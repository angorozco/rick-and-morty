import React from 'react';
import Pagination from '../Pagination/Pagination';
import './header.css'

const Header = ({handleSearch, pagination, handlePagination}) => {
  return (
    <header className='header'>
      <img src="/assets/logo.svg" alt="logo" className='logo' />
    
        <input className='header-searchbar' placeholder='Search Character' type="text" name='search' onChange={handleSearch} />
      
      <Pagination pagination={pagination} handlePagination={handlePagination}/>
    </header>
  )
}

export default Header