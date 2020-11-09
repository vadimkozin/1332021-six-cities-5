export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  // CHANGE_OFFER: `CHANGE_OFFER`,
  // RESET_ACTIVE_OFFER_ID: `RESET_ACTIVE_OFFER_ID`,
  CHANGE_SORT: `CHANGE_SORT`,

  CHANGE_SORT_NEW: `CHANGE_SORT_NEW`,
  CHANGE_OFFER_NEW: `CHANGE_OFFER_NEW`,
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


  changeSortNew: (sort) => ({
    type: ActionType.CHANGE_SORT_NEW,
    payload: sort,
  }),
  changeOfferNew: (offer) => ({
    type: ActionType.CHANGE_OFFER_NEW,
    payload: offer,
  }),
};
