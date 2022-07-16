import React from "react";
import {Locations} from "../../constants";
import {CURRENT_CITY_TYPES} from "../types";

export const LocationsList = (props) => {
  const {currentCity, onUserChoice} = props;

  const handleCityChange = (city, evt) => {
    evt.preventDefault();
    onUserChoice(city);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Locations.map((city) => (
          <li key={city} className="locations__item">
            <a
              onClick={(evt) => handleCityChange(city, evt)}
              className={
                currentCity === city
                  ? `locations__item-link tabs__item tabs__item--active`
                  : `locations__item-link tabs__item`
              }
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
