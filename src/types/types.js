// import {shape, func, number, bool, string, array, oneOf, arrayOf, objectOf, instanceOf} from 'prop-types';
import {func, number, bool, string, oneOf, objectOf, instanceOf, arrayOf} from 'prop-types';
import {TypesHousing} from '../const';

const NUMBER_RENTAL_OFFER = number.isRequired;

export const AppType = {
  numberOffer: NUMBER_RENTAL_OFFER,
};

export const MainPageType = {
  numberOffer: NUMBER_RENTAL_OFFER,
};

const OfferCard = {
  id: string.isRequired,
  picture: string.isRequired,
  title: string.isRequired,
  isPremium: bool.isRequired,
  typeHousing: oneOf([...Object.keys(TypesHousing).map((key) => key.name)]),
  rating: number.isRequired,
  price: number.isRequired,
};

export const OfferCardType = {
  onHover: func.isRequired,
  offer: objectOf(OfferCard).isRequired,
};

export const OffersCardType = {
  offers: arrayOf(OfferCard).isRequired,
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

