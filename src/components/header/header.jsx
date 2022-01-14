import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute} from '../../constants';
import {HEADER_TYPES} from '../types';

export const Header = ({authorizationEmail = null}) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      {authorizationEmail === null ? `Sign In` : authorizationEmail}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = HEADER_TYPES;

const mapDispatchToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authorizationEmail: state.authorizationEmail,
});

export default connect(mapDispatchToProps)(Header);
