import React, {useState} from 'react';
import {Locations} from '../../constants';
import {CURRENT_CITY_TYPES} from '../types';

export const LocationsList = ({currentCity}) => {
  const [isActive, setActive] = useState(currentCity());
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Locations.map((city, index) => (
          <li key={index} className="locations__item">
            <a
              onClick={(evt) => {
                if (Locations.includes(evt.target.innerText)) {
                  setActive(evt.target.innerText);
                }
              }}
              className={isActive === city ?
                `locations__item-link tabs__item tabs__item--active`
                : `locations__item-link tabs__item`}
              href="#"
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

LocationsList.propTypes = CURRENT_CITY_TYPES;
