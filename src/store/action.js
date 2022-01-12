export const ActionType = {
  CHANGE_CITY: `@city/changeCity`,
  SORT_CHANGE: `@sort/sortChange`,
  HOVER_ELEMENT: `@hover/element`,
  OFFERS_LIST_LOAD: `@offersList/Load`,
  OFFERS_LIST_UPDATE: `@offersList/Update`,
  REQUIRED_AUTHORIZATION: `@user/requiredAuthorization`,
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
  offersListLoad: (offers) => ({
    type: ActionType.OFFERS_LIST_LOAD,
    payload: offers,
  }),
  offersListUpdate: () => ({
    type: ActionType.OFFERS_LIST_UPDATE,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  })
};
