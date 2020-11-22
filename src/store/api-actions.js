import {loadOffers, requireAuthorization, redirectToRoute, setUser} from "./action";
import {loadHotelStart, loadHotelSuccess, loadHotelFailure} from "./action";
import {loadHotelsNearbyStart, loadHotelsNearbySuccess, loadHotelsNearbyFailure} from "./action";
import {loadCommentsStart, loadCommentsSuccess, loadCommentsFailure} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";
import {Offers, User, Comments} from './adapters';

export const fetchQffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(Offers.adaptToClient(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUser(User.adaptToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(setUser(User.adaptToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

//
export const fetchHotel = (id) => (dispatch, _getState, api) => {
  // dispatch(setHotelId(id));
  dispatch(loadHotelStart(id));

  api.get(`${APIRoute.OFFER_ID}${id}`)
  // .then(({data}) => {console.log(`fetch:`, Offers.adaptToClientOffer(data)); return {data};})
  .then(({data}) =>
    dispatch(loadHotelSuccess(Offers.adaptToClientOffer(data)))
  ).catch((error) => {
    // console.log(`ОШИБКА:`, error.toString());
    dispatch(loadHotelFailure(error));
  });
};

export const fetchHotelsNearby = (id) => (dispatch, _getState, api) => {
  // dispatch(setHotelId(id));
  dispatch(loadHotelsNearbyStart(id));

  api.get(`/hotels/${id}/nearby`)
  // .then(({data}) => {console.log(`Nearby:`, Offers.adaptToClient(data)); return {data};})
  .then(({data}) =>
    dispatch(loadHotelsNearbySuccess(Offers.adaptToClient(data)))
  ).catch((error) => {
    dispatch(loadHotelsNearbyFailure(error));
  });
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(loadCommentsStart(id));

  api.get(`/comments/${id}`)
  // .then(({data}) => {console.log(`Comments:`, Comments.adaptToClient(data)); return {data};})
  .then(({data}) =>
    dispatch(loadCommentsSuccess(Comments.adaptToClients(data)))
  ).catch((error) => {
    dispatch(loadCommentsFailure(error));
  });
};
