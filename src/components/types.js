import PropTypes from 'prop-types';

export const CURRENT_CITY_TYPES = {
  currentCity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
};

const offerType = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
  id: PropTypes.number.isRequired,
  images: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}).isRequired;

const reviewType = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;

export const OFFERS_TYPES = {
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export const MAIN_TYPES = {
  currentOffers: PropTypes.arrayOf(offerType).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onUserChoice: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

export const OFFER_TYPES = {
  offer: offerType,
};

export const REVIEWS_TYPE = {
  reviews: PropTypes.arrayOf(reviewType).isRequired,
};

export const REVIEW_TYPE = {
  review: reviewType
};

export const SORT_TYPES = {
  sortState: PropTypes.string.isRequired,
};
