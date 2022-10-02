import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <>
      <header>
        <div className="header-item">
          <a href="/" className="header-link">
            Tweetify
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
