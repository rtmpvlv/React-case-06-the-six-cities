import React from 'react';
import {Header} from '../header/header';
import {Places} from '../places-list/places-list';
import {LocationsList} from '../locations-list/locations-list';
import {Map} from '../map/map';
import {MAIN_TYPES} from '../types';
import withMainPage from './hocs/with-main-page.js';

const Main = ({selectedCity, onUserChoice, offers, onMouseHover, hoveredElement}) => {
  return (
    <>
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <LocationsList
              currentCity = {selectedCity}
              onUserChoice = {onUserChoice}
            />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {selectedCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom"
                  // places__options--opened"
                  >
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <Places
                  offers={offers}
                  onMouseHover = {onMouseHover}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offers}
                    hoveredElement={hoveredElement}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

Main.propTypes = MAIN_TYPES;

export const MainWrapped = withMainPage(Main);
