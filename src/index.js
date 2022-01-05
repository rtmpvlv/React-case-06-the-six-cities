import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {adaptOfferToClient, adaptReviewToClient} from './adapter';
import {reducer} from './store/reducer';
import {App} from './components/app/app';
import {mockData} from './mocks/offers';
import {reviews} from './mocks/reviews';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers = {mockData.map((offer) => adaptOfferToClient(offer))}
        reviews = {reviews.map((review) => adaptReviewToClient(review))}
      />
    </Provider>,
    document.querySelector(`#root`)
);
