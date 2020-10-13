import {shape, func, number, bool, string, oneOf, instanceOf, arrayOf} from 'prop-types';
import {TOWNS, TypesHousing} from '../const';

const NUMBER_RENTAL_OFFER = number.isRequired;

const PICTURE = {
  src: string.isRequired,
  alt: string.isRequired,
};

export const HOME_OWNER = {
  avatar: string.isRequired,
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

  town: oneOf(TOWNS).isRequired,
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

const REVIEW_TYPE = {
  avatar: string.isRequired,
  name: string.isRequired,
  rating: number.isRequired,
  date: instanceOf(Date).isRequired,
  text: string.isRequired,
};

export const REVIEWS_TYPE = {
  reviews: arrayOf(shape(REVIEW_TYPE)).isRequired,
};

export const APP_TYPE = {
  numberOffer: NUMBER_RENTAL_OFFER,
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  reviews: arrayOf(shape(REVIEW_TYPE)).isRequired,
};

export const MAIN_PAGE_TYPE = {
  numberOffer: NUMBER_RENTAL_OFFER,
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  onOfferClick: func.isRequired,
};

export const ROOM_PAGE_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
  reviews: arrayOf(shape(REVIEW_TYPE)).isRequired,
  offerId: string.isRequired,
};

export const RATING_STARS_TYPE = {
  className: string,
  rating: number.isRequired,
};

export const FAVORITES_PAGE_TYPE = {
  offers: arrayOf(shape(OFFER_CARD)).isRequired,
};
