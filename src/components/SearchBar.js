import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar flex'>
        <div className='bar flex'>
          <div><AiOutlineSearch size='2rem' className='icon' /></div>
          <input type="text" placeholder='Search' />
        </div>
        <button className='btn'>Search</button>
    </div>
  )
}

export default SearchBar