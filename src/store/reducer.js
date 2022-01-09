import {mockData} from '../mocks/offers';
import {adaptOfferToClient} from '../adapter';
import {Locations} from '../constants';
import {ActionType} from './action';
import {SortState} from '../constants';
import {sortedOffers} from '../utils';

const offers = mockData.map((offer) => adaptOfferToClient(offer));

const initialState = {
  selectedCity: Locations[0],
  currentOffers: offers.filter((offer) => offer.city.name === Locations[0]),
  sortState: SortState.POPULAR,
  hoveredElement: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      const currentOffers = offers.filter((offer) => offer.city.name === action.payload);
      return {
        ...state,
        selectedCity: action.payload,
        currentOffers,
      };
    }
    case ActionType.SORT_CHANGE: {
      return {
        ...state,
        sortState: SortState[action.payload],
        currentOffers: sortedOffers[SortState[action.payload]](offers),
      };
    }
    case ActionType.HOVER_ELEMENT: {
      return {
        ...state,
        hoveredElement: action.payload,
      };
    }
    case ActionType.OFFERS_LIST_UPDATE: {
      return {
        ...state,
      };
    }
    default: return state;
  }
};
