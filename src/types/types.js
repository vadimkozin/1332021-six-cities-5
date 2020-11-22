import {shape, exact, func, number, bool, string, oneOf, oneOfType, instanceOf, arrayOf} from 'prop-types';
import {CITIES, TypesHousing, OfferCardType} from '../const';

const citiesName = Object.keys(CITIES);

const isUrl = (props, propName, componentName) => {
  const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  if (!regex.test(props[propName])) {
    return new Error(`Invalid prop '${propName}' passed to '${componentName}'. Expected a valid URL.`);
  }

  return null;
};

const PICTURE = {
  src: isUrl,
  alt: string.isRequired,
};

export const HOME_OWNER = {
  avatar: isUrl,
  name: string.isRequired,
  isSuper: bool.isRequired,
};

export const HOME_OWNER_TYPE = {
  owner: shape(HOME_OWNER).isRequired,
  description: string.isRequired,
};

const POSITION_TYPE = {
  latitude: number,
  longitude: number,
  zoom: number
};

const OFFER_CARD = {
  id: number.isRequired,
  pictures: arrayOf(shape(PICTURE)).isRequired,
  title: string.isRequired,
  isPremium: bool.isRequired,
  typeHousing: oneOf([...Object.keys(TypesHousing).map((key) => TypesHousing[key].name)]),
  rating: number.isRequired,
  price: number.isRequired,

  city: oneOf(citiesName).isRequired,
  position: exact(POSITION_TYPE),
  isFavorite: bool.isRequired,

  description: string.isRequired,
  bedroomsNumber: number.isRequired,
  guestsMax: number.isRequired,
  householdItems: arrayOf(string).isRequired,
  owner: shape(HOME_OWNER).isRequired,
};

export const OFFER_CARD_TYPE = {
  offer: shape(OFFER_CARD).isRequired,
  type: oneOf([...Object.values(OfferCardType)]),
  onOfferChange: func,
};

export const OFFER_LIST_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  type: oneOf([...Object.values(OfferCardType)]),
};

const REVIEW_USER = {
  id: number.isRequired,
  avatarUrl: isUrl,
  name: string.isRequired,
  isPro: bool.isRequired,
};

const REVIEW = {
  id: number.isRequired,
  text: string.isRequired,
  date: instanceOf(Date).isRequired,
  rating: number.isRequired,
  user: shape(REVIEW_USER).isRequired
};

export const REVIEW_TYPE = {
  review: shape(REVIEW).isRequired,
};

export const REVIEW_LIST_TYPE = {
  reviews: arrayOf(shape(REVIEW)).isRequired,
};

export const APP_TYPE = {
  // offers: arrayOf(shape(OFFER_CARD)).isRequired,
  reviews: arrayOf(shape(REVIEW)).isRequired,
};

export const MAIN_PAGE_TYPE = {
  city: string.isRequired,
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  sort: string.isRequired,
};

export const ROOM_PAGE_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  reviews: arrayOf(shape(REVIEW)).isRequired,
  offerId: string.isRequired,
};

export const RATING_STARS_TYPE = {
  className: string,
  rating: number.isRequired,
};

export const FAVORITES_PAGE_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
};

export const MAP_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  city: string.isRequired,
  offer: oneOfType([shape(OFFER_CARD).isRequired, () => null]),
  layoutType: number.isRequired,

  zoom: number,
  zoomControl: bool,
  marker: bool,
};

export const CITY_LIST_TYPE = {
  cities: arrayOf(oneOf(citiesName).isRequired).isRequired,
  onCityChange: func.isRequired,
  activeItem: string,
  onActiveItemChange: func.isRequired,
};

export const SORT_TYPE = {
  onSortChange: func.isRequired,
};

export const ADD_COMMENT_TYPE = {
  onFormSubmit: func.isRequired,
  onStarChange: func.isRequired,
  onTextChange: func.isRequired,
  isDisabledSubmit: bool.isRequired,
};

export const HEADER_TYPE = {
  isAuthorized: bool,
};

export const CITY_WITHOUT_OFFERS_TYPE = {
  city: string.isRequired,
};

export const PRIVATE_ROUTE_TYPE = {
  authorizationStatus: string.isRequired,
  exact: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
};

export const LOGIN_PAGE_TYPE = {
  onSubmit: func.isRequired,
};

export const SMART_ROUTE_TYPE = {
  exact: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
  isRedirect: bool.isRequired,
  redirectTo: string.isRequired,
};
