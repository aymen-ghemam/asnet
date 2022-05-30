import React from "react";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div className="searchIcon">
        <AiOutlineSearch size="1.8rem" color="#CCCCCC" className="icon" />
      </div>
      <input onChange={props.handleSearch} className="searchInput" type="text" placeholder="Search" />
      <button className="searchBtn">Search</button>
    </div>
    // <div className='search-bar flex'>
    //     <div className='bar flex'>
    //       <div><AiOutlineSearch size='2rem' className='icon' /></div>
    //       <input type="text" placeholder='Search' />
    //     </div>
    //     <button className='btn'>Search</button>
    // </div>
  );
};

export default SearchBar;
