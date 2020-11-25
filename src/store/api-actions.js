import {requireAuthorization, redirectToRoute, setUser} from './action';
import {loadHotelStart, loadHotelSuccess, loadHotelFailure} from './action';
import {loadHotelsNearbyStart, loadHotelsNearbySuccess, loadHotelsNearbyFailure} from './action';
import {loadCommentsStart, loadCommentsSuccess, loadCommentsFailure} from './action';
import {sendCommentStart, sendCommentSuccess, sendCommentFailure} from './action';
import {setFavoriteStart, setFavoriteSuccess, setFavoriteFailure} from './action';
import {loadOffersStart, loadOffersSuccess, loadOffersFailure} from './action';
import {AuthorizationStatus, AppRoute} from '../const';
import {Offers, User, Comments} from './adapters';
import {route} from './api-config';
import {getOffers} from './selectors/offers';

export const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(loadOffersStart());

  return api.get(route.get.hotels())
    .then(({data}) => dispatch(loadOffersSuccess(Offers.adaptToClient(data))))
    .catch((error) => dispatch(loadOffersFailure(error)));
};
//


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(route.get.login())
    .then(({data}) => dispatch(setUser(User.adaptToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(route.post.login(), {email, password})
    .then(({data}) => dispatch(setUser(User.adaptToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const fetchHotel = (id) => (dispatch, _getState, api) => {
  dispatch(loadHotelStart(id));

  api.get(route.get.hotel(id))
    .then(({data}) => dispatch(loadHotelSuccess(Offers.adaptToClientOffer(data))))
    .catch((error) => dispatch(loadHotelFailure(error)));
};

export const fetchHotelsNearby = (id) => (dispatch, _getState, api) => {
  dispatch(loadHotelsNearbyStart(id));

  api.get(route.get.hotelsNearby(id))
    .then(({data}) => dispatch(loadHotelsNearbySuccess(Offers.adaptToClient(data))))
    .catch((error) => dispatch(loadHotelsNearbyFailure(error)));
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(loadCommentsStart(id));

  api.get(route.get.comments(id))
    .then(({data}) => dispatch(loadCommentsSuccess(Comments.adaptToClients(data))))
    .catch((error) => dispatch(loadCommentsFailure(error)));
};

export const sendComment = ({hotelId, comment, rating}) => (dispatch, _getState, api) => {
  dispatch(sendCommentStart(hotelId));

  return api.post(route.post.comments(hotelId), {comment, rating})
    .then(({data}) => dispatch(sendCommentSuccess(Comments.adaptToClients(data))))
    .catch((error) => dispatch(sendCommentFailure(error)));
};

//
export const setFavorite = ({hotelId, isFavorite}) => (dispatch, getState, api) => {
  dispatch(setFavoriteStart(hotelId));

  const status = isFavorite ? 1 : 0;

  return api.post(route.post.favoriteStatus(hotelId, status))
    .then(({data}) => {

      const offerServer = Offers.adaptToClientOffer(data);
      const offers = getOffers(getState()).slice();
      const index = offers.findIndex((offer) => offer.id === hotelId);

      if (index !== -1) {
        offers[index].isFavorite = offerServer.isFavorite;
      }

      dispatch(setFavoriteSuccess(offers));
    })
    .catch((error) => dispatch(setFavoriteFailure(error)));
};
