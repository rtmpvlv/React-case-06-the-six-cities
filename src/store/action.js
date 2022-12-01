export const ActionType = {
  CHANGE_CITY: `@city/changeCity`,
  SORT_CHANGE: `@sort/sortChange`,
  HOVER_ELEMENT: `@hover/element`,
  SET_OFFER_ID: `@offer/setOfferId`,
  LOAD_OFFER: `@offer/loadOffer`,
  LOAD_OFFERS_LIST: `@offersList/Load`,
  UPDATE_OFFERS_LIST: `@offersList/Update`,
  CHANGE_AUTHORIZATION_STATUS: `@user/changeAuthorizationStatus`,
  UPDATE_USER_DATA: `@user/updateUserData`,
  LOAD_COMMENTS: `@comments/loadComments`,
  LOGOUT: `@user/logout`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (sortType) => ({
    type: ActionType.SORT_CHANGE,
    payload: sortType,
  }),
  hoverElement: (offer) => ({
    type: ActionType.HOVER_ELEMENT,
    payload: offer,
  }),
  setOfferId: (id) => ({
    type: ActionType.SET_OFFER_ID,
    payload: id,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadOffersList: (offers) => ({
    type: ActionType.LOAD_OFFERS_LIST,
    payload: offers,
  }),
  updateOffersList: () => ({
    type: ActionType.UPDATE_OFFERS_LIST,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status,
  }),
  updateUserData: (email) => ({
    type: ActionType.UPDATE_USER_DATA,
    payload: email,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
