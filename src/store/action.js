export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  RESET_ACTIVE_OFFER_ID: `RESET_ACTIVE_OFFER_ID`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_SORT_NEW: `CHANGE_SORT_NEW`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city,
  }),
  changeOffer: (activeOfferId) => ({
    type: ActionType.CHANGE_OFFER,
    payload: activeOfferId,
  }),
  resetActiveOfferId: () => ({
    type: ActionType.RESET_ACTIVE_OFFER_ID,
    payload: null,
  }),
  changeSort: (sortActive) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortActive,
  }),
  changeSortNew: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),

};
