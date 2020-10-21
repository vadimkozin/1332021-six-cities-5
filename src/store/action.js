// нужно: изменение города и получение списка предложений.
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFERS_BY_CITY: `GET_OFFERS_BY_CITY`,

};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers,
  }),
  getOffersByCity: (city) => ({
    type: ActionType.GET_OFFERS_BY_CITY,
    payload: city,
  }),

};
