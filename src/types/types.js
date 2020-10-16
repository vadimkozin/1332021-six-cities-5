import {shape, func, number, bool, string, oneOf, instanceOf, arrayOf} from 'prop-types';
import {CITIES, TypesHousing} from '../const';

const NUMBER_RENTAL_OFFER = number.isRequired;

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
  isFavorite: bool.isRequired,

  description: string.isRequired,
  bedroomsNumber: number.isRequired,
  guestsMax: number.isRequired,
  householdItems: arrayOf(string).isRequired,
  owner: shape(HOME_OWNER).isRequired,
};

export const OFFER_CARD_TYPE = {
  onHover: func.isRequired,
  offer: shape(OFFER_CARD).isRequired,
  onOfferClick: func.isRequired,
};

export const OFFER_LIST_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  onOfferClick: func.isRequired,
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
  numberOffer: NUMBER_RENTAL_OFFER,
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  reviews: arrayOf(shape(REVIEW)).isRequired,
};

export const MAIN_PAGE_TYPE = {
  numberOffer: NUMBER_RENTAL_OFFER,
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  onOfferClick: func.isRequired,
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
  center: arrayOf(number).isRequired,
  zoom: number,
  zoomControl: bool,
  marker: bool,
  className: string,
};
