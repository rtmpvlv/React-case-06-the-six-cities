import PropTypes from 'prop-types';

export const offerType = PropTypes.shape({
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
});

export const commentType = PropTypes.shape({
  comment: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }),
});

export const MAIN_TYPES = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onUserChoice: PropTypes.func.isRequired,
  authorizationEmail: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ])
};

export const OFFER_TYPES = {
  offer: offerType,
};

export const OFFERS_TYPES = {
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export const COMMENTS_TYPE = {
  comments: PropTypes.arrayOf(commentType).isRequired,
};

export const REVIEW_TYPE = {
  comment: commentType
};

export const SORT_TYPES = {
  sortState: PropTypes.string.isRequired,
};

export const LOGIN_TYPES = {
  onSubmit: PropTypes.func.isRequired,
};

export const CURRENT_CITY_TYPES = {
  selectedCity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
};

export const PRIVATE_ROUTE_TYPES = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export const HEADER_TYPES = {
  authorizationEmail: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ])
};
