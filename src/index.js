import React from 'react';
import ReactDOM from 'react-dom';
import {adaptOfferToClient, adaptReviewToClient} from './adapter';
import {App} from './components/app/app';
import {mockData} from './mocks/offers';
import {reviews} from './mocks/reviews';

ReactDOM.render(
    <App
      offers = {mockData.map((offer) => adaptOfferToClient(offer))}
      reviews = {reviews.map((review) => adaptReviewToClient(review))}
    />,
    document.querySelector(`#root`)
);
