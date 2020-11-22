export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  CHANGE_SORT: `CHANGE_SORT`,

  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,

  SET_USER: `SET_USER`,
  LOAD_OFFER_BY_ID: `LOAD_OFFER_BY_ID`,

  SET_HOTEL_ID: `hotel/set_id`,
  LOAD_HOTEL_START: `hotel/load_start`,
  LOAD_HOTEL_SUCCESS: `hotel/load_success`,
  LOAD_HOTEL_FAILURE: `hotel/load_failure`,

  LOAD_HOTELS_NEARBY_START: `hotels_nearby/load_start`,
  LOAD_HOTELS_NEARBY_SUCCESS: `hotels_nearby/load_success`,
  LOAD_HOTELS_NEARBY_FAILURE: `hotels_nearby/load_failure`,

  LOAD_COMMENTS_START: `comments/load_start`,
  LOAD_COMMENTS_SUCCESS: `comments/load_success`,
  LOAD_COMMENTS_FAILURE: `comments/load_failure`,


};

const createAction = (type) => (payload) => ({type, payload});

export const ActionCreator = {
  changeCity: createAction(ActionType.CHANGE_CITY),
  getOffers: createAction(ActionType.GET_OFFERS),
  changeSort: createAction(ActionType.CHANGE_SORT),
  changeOffer: createAction(ActionType.CHANGE_OFFER),
};

export const loadOffers = createAction(ActionType.LOAD_OFFERS);
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION);
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE);
export const setUser = createAction(ActionType.SET_USER);
export const loadOffer = createAction(ActionType.LOAD_OFFER_BY_ID);

export const setHotelId = createAction(ActionType.SET_HOTEL_ID);
export const loadHotelStart = createAction(ActionType.LOAD_HOTEL_START);
export const loadHotelSuccess = createAction(ActionType.LOAD_HOTEL_SUCCESS);
export const loadHotelFailure = createAction(ActionType.LOAD_HOTEL_FAILURE);

export const loadHotelsNearbyStart = createAction(ActionType.LOAD_HOTELS_NEARBY_START);
export const loadHotelsNearbySuccess = createAction(ActionType.LOAD_HOTELS_NEARBY_SUCCESS);
export const loadHotelsNearbyFailure = createAction(ActionType.LOAD_HOTELS_NEARBY_FAILURE);

export const loadCommentsStart = createAction(ActionType.LOAD_COMMENTS_START);
export const loadCommentsSuccess = createAction(ActionType.LOAD_COMMENTS_SUCCESS);
export const loadCommentsFailure = createAction(ActionType.LOAD_COMMENTS_FAILURE);
