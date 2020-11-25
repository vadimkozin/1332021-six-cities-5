import {createSelector} from 'reselect';
import {NameSpace} from '../reducers/root-reducer';

export const getCity = (state) => state[NameSpace.PROCESS].city || ``;
export const getCities = (state) => state[NameSpace.DATA].cities || ``;
export const getSort = (state) => state[NameSpace.PROCESS].sort || ``;

export const getOffersGist = (state) => state[NameSpace.PROCESS].offersGist || {};
export const getOffers = (state) => state[NameSpace.PROCESS].offersGist.data || [];

export const getOffersByCity = createSelector(getOffers, getCity, (offers, city) =>
  offers.filter((offer) => offer.city === city)
);

export const getIsLoading = (state) => state[NameSpace.PROCESS].hotel.isLoading;
export const getHotelGist = (state) => state[NameSpace.PROCESS].hotelGist || {};
export const getHotel = (state) => state[NameSpace.PROCESS].hotelGist.data || ``;
export const getHotelId = (state) => state[NameSpace.PROCESS].hotelGist.data.id || 0;
export const getHotelsNearbyGist = (state) => state[NameSpace.PROCESS].hotelsNearbyGist || {};
export const getCommentsGist = (state) => state[NameSpace.PROCESS].commentsGist || {};
export const getComments = (state) => state[NameSpace.PROCESS].commentsGist.data || [];
