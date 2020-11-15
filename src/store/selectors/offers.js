import {createSelector} from 'reselect';
import {NameSpace} from '../reducers/root-reducer';

export const getOffer = (state) => state[NameSpace.PROCESS].offer || ``;
export const getOffers = (state) => state[NameSpace.DATA].offers || [];
export const getCity = (state) => state[NameSpace.PROCESS].city || ``;
export const getCities = (state) => state[NameSpace.DATA].cities || ``;
export const getSort = (state) => state[NameSpace.PROCESS].sort || ``;

export const getOffersByCity = createSelector(getOffers, getCity, (offers, city) =>
  offers.filter((offer) => offer.city === city)
);
