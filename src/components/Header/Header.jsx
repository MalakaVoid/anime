import React from 'react';

import './Header.css';

function Header() {
  return (
    <header className="header">
        <nav className="header__navbar">
            <div className="header__logo">
                <a href="/">AnimeORG</a>
            </div>
            <div className="header__links">
                <a href="/">Аниме</a>
                <a href="/">Случайное аниме</a>
            </div>
            <a className="header__user" href='user'>
                <svg viewBox="0 0 16 16" fill="#fff"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <rect width="16" height="16" fill="none"></rect> <path d="M14,14l0,-12l-6,0l0,-2l8,0l0,16l-8,0l0,-2l6,0Zm-6.998,-0.998l4.998,-5.002l-5,-5l-1.416,1.416l2.588,2.584l-8.172,0l0,2l8.172,0l-2.586,2.586l1.416,1.416Z"></path> </g></svg>
                &nbsp; Войти
            </a>
        </nav>
    </header>
  )
}

export default Header