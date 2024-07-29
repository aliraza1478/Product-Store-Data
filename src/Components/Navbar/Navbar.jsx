import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ toggleSidebar, searchValue, handleSearchChange }) => {
  return (
    <div className='parent-navbar'>
      <div className="navbar">
        <GiHamburgerMenu className='burger-menu' onClick={toggleSidebar} />
        <input
          className='searchbar'
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={handleSearchChange}
        />
        <div className='icon-search'>
          <CiSearch className='icon-search' />
        </div>
        <div className='ali'>
          <p>Ali Raza</p>
        </div>
        <div className='profile-icon'>
          <CgProfile />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
