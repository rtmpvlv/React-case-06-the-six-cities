import React from 'react';
import {Card} from '../card/card';
import {OFFERS_TYPES} from '../types';

export const Places = ({offers, onMouseHover}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <Card
          key= {offer.id}
          offer = {offer}
          onMouseHover = {onMouseHover}
        />)
      }
    </div>
  );
};

Places.propTypes = OFFERS_TYPES;
