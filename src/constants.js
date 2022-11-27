export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`,
};

export const Locations = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

export const Coordinates = {
  Paris: {
    lat: 48.864716,
    lng: 2.349014,
  },
  Cologne: {
    lat: 50.935173,
    lng: 6.953101,
  },
  Brussels: {
    lat: 50.85045,
    lng: 4.34878,
  },
  Amsterdam: {
    lat: 52.371807,
    lng: 4.896029,
  },
  Hamburg: {
    lat: 53.551086,
    lng: 9.993682,
  },
  Dusseldorf: {
    lat: 51.233334,
    lng: 6.783333,
  },
};

export const SortState = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  BY_RATING: `Top rated first`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ApiRequestURLs = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  HOTELS: `/hotels`,
  COMMENTS: `/comments/`,
};
