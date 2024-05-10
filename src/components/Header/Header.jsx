import React from 'react'
import logo from "../../assets/Logonetflix.png";
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

const Header = () => {
    console.log("netflix logo", logo);
   
    return (
        <nav className="header">
            <img src={logo} alt="logo"  />
            <div>
                <Link to="/"></Link>
                <Link to="/tvShows">Tv Shows</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/recentlyAdded">  Recently Added </Link>
                <Link to="/myList">My Lists</Link>
            </div>
            <IoSearch />
        </nav>
    )
}

export default Header