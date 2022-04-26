import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Welcome to T-Shirt Mania</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orderreview">Order Review</Link>
                <Link to="/grandpa">Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;