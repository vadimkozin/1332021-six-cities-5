import {loadOffers, requireAuthorization, redirectToRoute, setUser} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";
import {Offers, User} from './adapters';

export const fetchQffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(Offers.adaptToClient(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUser(User.adaptToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
