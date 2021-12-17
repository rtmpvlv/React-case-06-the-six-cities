import React from 'react';
import ReactDOM from 'react-dom';
import {adaptOfferToClient} from './adapter';
import {App} from './components/app/app';
import {mockData} from './mocks/offers';

const Setting = {
  PLACES_COUNT: 5,
};

ReactDOM.render(
    <App
      placesCount = {Setting.PLACES_COUNT}
      offers = {mockData.map((offer) => adaptOfferToClient(offer))}
    />,
    document.querySelector(`#root`)
);
