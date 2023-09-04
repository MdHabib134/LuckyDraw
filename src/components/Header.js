import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/lucky-draw-image.jpg'
const Header = () => {
    return (
        <div className='header bg-black d-lg-flex justify-content-lg-between align-items-lg-center'>
            <img src={logo} alt="Lucky Draw Logo" className="logo" />
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/create'>Create New Draw</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header; 