export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  CHANGE_SORT: `CHANGE_SORT`,

  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,

  SET_USER: `SET_USER`,

  LOAD_OFFERS_START: `offers/load_start`,
  LOAD_OFFERS_SUCCESS: `offers/load_success`,
  LOAD_OFFERS_FAILURE: `offers/load_failure`,

  LOAD_HOTEL_START: `hotel/load_start`,
  LOAD_HOTEL_SUCCESS: `hotel/load_success`,
  LOAD_HOTEL_FAILURE: `hotel/load_failure`,

  LOAD_HOTELS_NEARBY_START: `hotels_nearby/load_start`,
  LOAD_HOTELS_NEARBY_SUCCESS: `hotels_nearby/load_success`,
  LOAD_HOTELS_NEARBY_FAILURE: `hotels_nearby/load_failure`,

  LOAD_COMMENTS_START: `comments/load_start`,
  LOAD_COMMENTS_SUCCESS: `comments/load_success`,
  LOAD_COMMENTS_FAILURE: `comments/load_failure`,

  SEND_COMMENT_START: `comment/send_start`,
  SEND_COMMENT_SUCCESS: `comment/send_success`,
  SEND_COMMENT_FAILURE: `comment/send_failure`,

  SET_FAVORITE_START: `favorite/set_start`,
  SET_FAVORITE_SUCCESS: `favorite/set_success`,
  SET_FAVORITE_FAILURE: `favorite/set_failure`,

};

const createAction = (type) => (payload) => ({type, payload});

export const ActionCreator = {
  changeCity: createAction(ActionType.CHANGE_CITY),
  changeSort: createAction(ActionType.CHANGE_SORT),
  changeOffer: createAction(ActionType.CHANGE_OFFER),
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION);
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE);
export const setUser = createAction(ActionType.SET_USER);

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

export const sendCommentStart = createAction(ActionType.SEND_COMMENT_START);
export const sendCommentSuccess = createAction(ActionType.SEND_COMMENT_SUCCESS);
export const sendCommentFailure = createAction(ActionType.SEND_COMMENT_FAILURE);

//
export const loadOffersStart = createAction(ActionType.LOAD_OFFERS_START);
export const loadOffersSuccess = createAction(ActionType.LOAD_OFFERS_SUCCESS);
export const loadOffersFailure = createAction(ActionType.LOAD_OFFERS_FAILURE);

export const setFavoriteStart = createAction(ActionType.SET_FAVORITE_START);
export const setFavoriteSuccess = createAction(ActionType.SET_FAVORITE_SUCCESS);
export const setFavoriteFailure = createAction(ActionType.SET_FAVORITE_FAILURE);

