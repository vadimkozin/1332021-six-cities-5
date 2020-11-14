import {loadOffers, requireAuthorization, redirectToRoute} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";
import {Offers} from './adapters';

export const fetchQffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    // .then(({data}) => dispatch(loadOffers(data)))
    .then(({data}) => dispatch(loadOffers(Offers.adaptToClient(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
