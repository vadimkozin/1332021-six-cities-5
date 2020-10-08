// import {shape, func, number, bool, string, array, oneOf, arrayOf, objectOf, instanceOf} from 'prop-types';
import {shape, func, number, bool, string, oneOf, objectOf, instanceOf, arrayOf} from 'prop-types';
import {TypesHousing} from '../const';

const NUMBER_RENTAL_OFFER = number.isRequired;

export const MainPageType = {
  numberOffer: NUMBER_RENTAL_OFFER,
};

const Picture = {
  src: string.isRequired,
  alt: string.isRequired,
};

const OfferCard = {
  id: string.isRequired,
  pictures: arrayOf(shape(Picture)).isRequired,
  title: string.isRequired,
  isPremium: bool.isRequired,
  typeHousing: oneOf([...Object.keys(TypesHousing).map((key) => key.name)]),
  rating: number.isRequired,
  price: number.isRequired,
};

export const OfferCardType = {
  onHover: func.isRequired,
  offer: objectOf(shape(OfferCard)).isRequired,
};

export const OffersCardType = {
  offers: arrayOf(shape(OfferCard)).isRequired,
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

// an array of a particular shape.
// ReactComponent.propTypes = {
//   arrayWithShape: arrayOf(shape({
//     color: string.isRequired,
//     fontSize: number.isRequired,
//   })).isRequired,
// };

export const AppType = {
  numberOffer: NUMBER_RENTAL_OFFER,
  offers: arrayOf(shape(OfferCard)).isRequired,
  reviews: arrayOf(shape(ReviewType)).isRequired,
};


