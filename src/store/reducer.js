import {adaptCommentToClient, adaptOfferToClient} from "../adapter";
import {Locations} from "../constants";
import {ActionType} from "./action";
import {SortState, AuthorizationStatus} from "../constants";
import {sortedOffers} from "../utils";

const initialState = {
  offers: [],
  offerEntities: {},
  offer: null,
  offerId: null,
  comments: [],
  currentOffers: [],
  selectedCity: Locations[0],
  sortState: SortState.POPULAR,
  hoveredElement: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
  isDataLoaded: false,
  isCommentsLoaded: false,
  isOfferLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS_LIST: {
      const offers = action.payload.map((offer) => adaptOfferToClient(offer));

      const offerEntities = offers.reduce((all, offer) => {
        all[offer.id] = offer;
        return all;
      }, {});

      return {
        ...state,
        offers,
        offerEntities,
        currentOffers: offers.filter(
            (offer) => offer.city.name === state.selectedCity
        ), // exclude
        isDataLoaded: true,
      };
    }
    case ActionType.LOAD_OFFER: {
      return {
        ...state,
        offer: adaptOfferToClient(action.payload),
        isOfferLoaded: true,
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
    case ActionType.SET_OFFER_ID: {
      return {
        ...state,
        offerId: action.payload,
      };
    }
    case ActionType.UPDATE_OFFERS_LIST: {
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
        comments: action.payload.map((comment) => adaptCommentToClient(comment)),
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
