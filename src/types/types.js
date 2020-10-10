import {shape, func, number, bool, string, oneOf, instanceOf, arrayOf} from 'prop-types';
import {TypesHousing} from '../const';

const NUMBER_RENTAL_OFFER = number.isRequired;

const Picture = {
  src: string.isRequired,
  alt: string.isRequired,
};

export const HomeOwner = {
  avatar: string.isRequired,
  name: string.isRequired,
  isSuper: bool.isRequired,
};

export const HomeOwnerType = {
  owner: shape(HomeOwner).isRequired,
  description: string.isRequired,
};

const OfferCard = {
  id: number.isRequired,
  pictures: arrayOf(shape(Picture)).isRequired,
  title: string.isRequired,
  isPremium: bool.isRequired,
  typeHousing: oneOf([...Object.keys(TypesHousing).map((key) => TypesHousing[key].name)]),
  rating: number.isRequired,
  price: number.isRequired,

  description: string.isRequired,
  bedroomsNumber: number.isRequired,
  guestsMax: number.isRequired,
  householdItems: arrayOf(string).isRequired,
  owner: shape(HomeOwner).isRequired,
};

export const OfferFullType__ = {
  offer: shape(OfferCard).isRequired,
  description: string.isRequired,
  bedroomsNumber: number.isRequired,
  guestsMax: number.isRequired,
  householdItems: arrayOf(string).isRequired,
  owner: shape(HomeOwner).isRequired,
};

export const OfferCardType = {
  onHover: func.isRequired,
  offer: shape(OfferCard).isRequired,
  onOfferClick: func.isRequired,
};

export const OfferListType = {
  offers: arrayOf(shape(OfferCard)).isRequired,
  onOfferClick: func.isRequired,
};

export const ReviewType = {
  avatar: string.isRequired,
  name: string.isRequired,
  rating: number.isRequired,
  date: instanceOf(Date).isRequired,
  text: string.isRequired,
};

export const ReviewsType = {
  reviews: arrayOf(ReviewType).isRequired,
};

export const AppType = {
  numberOffer: NUMBER_RENTAL_OFFER,
  offers: arrayOf(shape(OfferCard)).isRequired,
  reviews: arrayOf(shape(ReviewType)).isRequired,
};

export const MainPageType = {
  numberOffer: NUMBER_RENTAL_OFFER,
  offers: arrayOf(shape(OfferCard)).isRequired,
  onOfferClick: func.isRequired,
};

export const RoomPageType = {
  offers: arrayOf(shape(OfferCard)).isRequired,
  reviews: arrayOf(shape(ReviewType)).isRequired,
  offerId: string.isRequired,
};
