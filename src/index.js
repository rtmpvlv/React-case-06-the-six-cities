import React from 'react';
import ReactDOM from 'react-dom';
import {adaptOfferToClient} from './adapter';
import {App} from './components/app/app';
import {mockData} from './mocks/offers';

ReactDOM.render(
    <App
      offers = {mockData.map((offer) => adaptOfferToClient(offer))}
    />,
    document.querySelector(`#root`)
);
