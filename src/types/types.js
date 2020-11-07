import {shape, exact, func, number, bool, string, oneOf, oneOfType, instanceOf, arrayOf, any} from 'prop-types';
import {CITIES, TypesHousing, OfferCardType} from '../const';

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

  city: oneOf(CITIES).isRequired,
  coordinates: arrayOf(number).isRequired,
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
  onOfferClick: func,
  classNameMain: string.isRequired,
  classNameImage: string.isRequired,
  nameBookmark: string.isRequired,
  onHoverCard: func,
};

export const OFFER_LIST_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  onOfferClick: func,
  type: oneOf([...Object.values(OfferCardType)]),
};

const REVIEW = {
  avatar: isUrl,
  name: string.isRequired,
  rating: number.isRequired,
  date: instanceOf(Date).isRequired,
  text: string.isRequired,
};

export const REVIEW_TYPE = {
  review: shape(REVIEW).isRequired,
};

export const REVIEW_LIST_TYPE = {
  reviews: arrayOf(shape(REVIEW)).isRequired,
};

export const APP_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  reviews: arrayOf(shape(REVIEW)).isRequired,
};

export const MAIN_PAGE_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  onOfferClick: func.isRequired,
  cities: arrayOf(string.isRequired).isRequired,
  // onCityChange: func.isRequired,
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
  offerCoords: arrayOf(arrayOf(number)).isRequired,
  offerActiveCoords: arrayOf(number),
  center: arrayOf(number).isRequired,
  zoom: number,
  zoomControl: bool,
  marker: bool,
  layoutType: number.isRequired,
};
export const MAP_TYPE_NEW = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  city: string.isRequired,
  activeOfferId: oneOfType([number.isRequired, any]),
  layoutType: number.isRequired,
  zoom: number,
  zoomControl: bool,
  marker: bool,
};

export const CITY_LIST_TYPE = {
  city: string.isRequired,
  cities: arrayOf(string.isRequired).isRequired,
  onCityChange: func.isRequired,
};
export const CITY_LIST_NEW_TYPE = {
  cities: arrayOf(string.isRequired).isRequired,
  onCityChange: func.isRequired,
  activeItem: string,
  onActiveItemChange: func.isRequired,
};

export const SORT_TYPE = {
  sortActive: string.isRequired,
  onSortChange: func.isRequired,
};
export const SORT_NEW_TYPE = {
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
