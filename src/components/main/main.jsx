import React from 'react';

import {Header} from '../header/header';
import {LocationsList} from '../locations-list/locations-list';
import {Sort} from './sort-form';
import {Places} from '../places-list/places-list';
import {Map} from '../map/map';

import {MAIN_TYPES} from '../types';
import withMainPage from './hocs/with-main-page.js';

const Main = ({selectedCity, onUserChoice, sortState, onSortChange, offers, onOfferHover, hoveredElement}) => {
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
                <Sort
                  sortState={sortState}
                  onSortChange={onSortChange}
                />
                <Places
                  offers={offers}
                  onMouseHover = {onOfferHover}
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
