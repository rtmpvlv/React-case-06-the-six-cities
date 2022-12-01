import {adaptOfferToClient} from "../adapter";
import {Locations} from "../constants";
import {ActionType} from "./action";
import {SortState, AuthorizationStatus} from "../constants";
import {sortedOffers} from "../utils";

const initialState = {
  offers: [],
  comments: [],
  currentOffers: [],
  selectedCity: Locations[0],
  sortState: SortState.POPULAR,
  hoveredElement: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
  isDataLoaded: false,
  isCommentsLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OFFERS_LIST_LOAD: {
      const offers = action.payload.map((offer) => adaptOfferToClient(offer));
      return {
        ...state,
        offers,
        currentOffers: offers.filter(
            (offer) => offer.city.name === state.selectedCity
        ), // exclude
        isDataLoaded: true,
      };
    }
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        selectedCity: action.payload,
        currentOffers: state.offers.filter(
            (offer) => offer.city.name === action.payload
        ),
      };
    }
    case ActionType.SORT_CHANGE: {
      return {
        ...state,
        sortState: SortState[action.payload],
        currentOffers: sortedOffers[SortState[action.payload]](
            state.offers.filter((offer) => offer.city.name === state.selectedCity)
        ),
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
    case ActionType.CHANGE_AUTHORIZATION_STATUS: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.UPDATE_USER_DATA: {
      const {
        name,
        avatar_url: avatarUrl,
        email,
        id,
        is_pro: isPro,
      } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          name,
          avatarUrl,
          email,
          id,
          isPro,
        },
      };
    }
    case ActionType.LOAD_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    }
    case ActionType.LOGOUT: {
      return {
        ...state,
        user: null,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    }
    default:
      return state;
  }
};
