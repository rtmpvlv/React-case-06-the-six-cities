import React from "react";
import {Locations} from "../../constants";
import {CURRENT_CITY_TYPES} from "../types";

export const HeaderLocationsList = (props) => {
  const {selectedCity, onUserChoice} = props;

  const handleCityChange = (city) => {
    onUserChoice(city);
  };

  const getClassName = (city) => (`locations__item-link tabs__item ${selectedCity === city && `tabs__item--active`}`);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Locations.map((city) => (
          <li key={city} className="locations__item">
            <a
              onClick={() => handleCityChange(city)}
              className={getClassName(city)}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

HeaderLocationsList.propTypes = CURRENT_CITY_TYPES;
