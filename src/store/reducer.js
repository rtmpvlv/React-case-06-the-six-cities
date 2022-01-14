import {adaptOfferToClient} from '../adapter';
import {Locations} from '../constants';
import {ActionType} from './action';
import {SortState, AuthorizationStatus} from '../constants';
import {sortedOffers} from '../utils';

let offers = [];

const initialState = {
  offers,
  currentOffers: offers.filter((offer) => offer.city.name === Locations[0]),
  selectedCity: Locations[0],
  sortState: SortState.POPULAR,
  hoveredElement: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationEmail: null,
  isDataLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OFFERS_LIST_LOAD: {
      offers = action.payload.map((offer) => adaptOfferToClient(offer));
      return {
        ...state,
        offers,
        currentOffers: offers.filter((offer) => offer.city.name === state.selectedCity),
        isDataLoaded: true,
      };
    }
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        selectedCity: action.payload,
        currentOffers: offers.filter((offer) => offer.city.name === action.payload),
      };
    }
    case ActionType.SORT_CHANGE: {
      return {
        ...state,
        sortState: SortState[action.payload],
        currentOffers: sortedOffers[SortState[action.payload]](offers.filter((offer) => offer.city.name === state.selectedCity)),
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
    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.UPDATE_LOGIN_DATA: {
      return {
        ...state,
        authorizationEmail: action.payload,
      };
    }

    default: return state;
  }
};
