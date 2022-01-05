import {mockData} from '../mocks/offers';
import {adaptOfferToClient} from '../adapter';
import {Locations} from '../constants';
import {ActionType} from './action';

const offers = mockData.map((offer) => adaptOfferToClient(offer));
const initialCity = Locations[0];
const getOffers = () => offers.filter((offer) => offer.city.name === initialCity);

const initialState = {
  selectedCity: initialCity,
  currentOffers: getOffers(),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const currentOffers = offers.filter((offer) => offer.city.name === action.payload);
      return {
        selectedCity: action.payload,
        currentOffers,
      };
    case ActionType.OFFERS_LIST_UPDATE:
      return {
        ...state,
      };
    default: return state;
  }
};
