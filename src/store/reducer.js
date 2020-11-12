import {extend} from "@utils";
import {ActionType} from "./action";
import offers, {CITIES} from '../mocks/offers';
import {SortingType} from '@const';

const cities = Object.keys(CITIES);

const initCity = cities[0];

const getOffersByCity = (offersAll, city) => offersAll.filter((offer) => offer.city === city);

const initialState = {
  city: initCity,
  cities,
  offers: getOffersByCity(offers, initCity),
  offer: null,
  sort: SortingType.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.GET_OFFERS:
      const city = action.payload;
      return extend(state, {offers: getOffersByCity(offers, city)});

    case ActionType.CHANGE_SORT:
      const sort = action.payload;
      return extend(state, {sort});

    case ActionType.CHANGE_OFFER:
      const offer = action.payload;
      return extend(state, {offer});

    default:
      return state;
  }
};

export {reducer};
