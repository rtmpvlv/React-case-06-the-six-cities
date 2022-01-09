export const ActionType = {
  CHANGE_CITY: `@city/changeCity`,
  SORT_CHANGE: `@sort/sortChange`,
  HOVER_ELEMENT: `@hover/element`,
  OFFERS_LIST_UPDATE: `offersListUpdate`,
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
  offersListUpdate: () => ({
    type: ActionType.OFFERS_LIST_UPDATE,
  }),
};
