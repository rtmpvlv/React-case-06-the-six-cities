import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {Header} from '../header/header';

export const PageNotFound = () => {
  return (
    <>
      <div className="page page--favorites-empty">
        <Header/>
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Page not found.</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Error 404</b>
                <p className="favorites__status-description"><Link to={AppRoute.MAIN}>Page not found. Click here to return to the main page.</Link></p>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    </>
  );
};
