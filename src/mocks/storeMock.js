import configureStore from 'redux-mock-store';
import {SortingType, CITIES_NAMES, StatusType, AuthorizationStatus} from '../const';
import {offerAdapter, commentAdapter} from '../store/adapters';

import hotelJson from './json/hotel';
import hotelsNearbyJson from './json/hotels-nearby';
import offersJson from './json/offers';
import commentsJson from './json/comments';

export const hotel = offerAdapter.adaptToClientOffer(hotelJson);
export const hotelsNearby = offerAdapter.adaptToClient(hotelsNearbyJson);
export const offers = offerAdapter.adaptToClient(offersJson);
export const comments = commentAdapter.adaptToClient(commentsJson);

const initCity = CITIES_NAMES[0];

const Data = {
  SORT: `sort`,
  CITY: `city`,
  OFFERS: `offersGist`,
  HOTEL: `hotelGist`,
  HOTELS_NEARBY: `hotelsNearbyGist`,
  COMMENTS: `commentsGist`,
};

const basicState = {
  data: null,
  status: StatusType.IDLE,
  error: ``,
};

const makeInit = (basic = basicState) => (data = {}) => Object.assign({}, basic, {data});

const init = makeInit();

const storeConfig = configureStore();

const storeMock = storeConfig({
  DATA: {
    cities: CITIES_NAMES,
  },
  PROCESS: {
    [Data.CITY]: initCity,
    [Data.SORT]: SortingType.POPULAR,
    [Data.OFFERS]: init(offers),
    [Data.HOTEL]: init(hotel),
    [Data.HOTELS_NEARBY]: init(hotelsNearby),
    [Data.COMMENTS]: init(comments),
  },
  USER: {
    id: 1,
    name: `qwerty`,
    email: `qwerty@mail.ru`,
    isPro: false,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  },
});

export default storeMock;
