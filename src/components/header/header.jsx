import React from 'react';
import {HEADER_TYPE} from '@types';

const Header = ({isAuthorized = false}) => {
  const profile = isAuthorized
    ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
    : <span className="header__login">Sign in</span>;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="/login">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {profile}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = HEADER_TYPE;

export default Header;
