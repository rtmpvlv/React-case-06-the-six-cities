export const ActionType = {
  CHANGE_CITY: `@city/changeCity`,
  OFFERS_LIST_UPDATE: `offersListUpdate`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  offersListUpdate: () => ({
    type: ActionType.OFFERS_LIST_UPDATE,
  }),
};
