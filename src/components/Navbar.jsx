
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="header__nav header__navItems">
    <div className="container">
      <Link className="typo--nav header__item header__item--work" to="/work">Work</Link>
      <Link className="typo--nav header__item header__item--partners" to="/about">About</Link>
      <Link className="typo--nav header__item header__item--news" to="/news">News</Link>
      <Link className="typo--nav header__item header__item--contact" to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
