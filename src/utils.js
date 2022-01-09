import {SortState} from './constants';

export const sortedOffers = {
  [SortState.POPULAR]: (offers) => offers,
  [SortState.LOW_TO_HIGH]: (offers) => offers.slice().sort((offer1, offer2) => offer1.price - offer2.price),
  [SortState.HIGH_TO_LOW]: (offers) => offers.slice().sort((offer1, offer2) => offer2.price - offer1.price),
  [SortState.BY_RATING]: (offers) => offers.slice().sort((offer1, offer2) => offer2.rating - offer1.rating),
};
