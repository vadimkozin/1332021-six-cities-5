import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getUser, getIsAuth} from '@selectors/user';
import {AppRoute} from '@const';

const Header = () => {
  const user = useSelector(getUser);
  const isAuth = useSelector(getIsAuth);

  const profile = isAuth
    ? <span className="header__user-name user__name">{user.email}</span>
    : <span className="header__login">Sign in</span>;

  const avatarStyle = isAuth
    ? {backgroundImage: `url(${user.avatarUrl})`, borderRadius: `50%`}
    : undefined;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.ROOT}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={isAuth ? AppRoute.FAVORITES : AppRoute.LOGIN}
                >
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    style={avatarStyle}
                  >
                  </div>
                  {profile}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
