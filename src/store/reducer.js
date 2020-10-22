import {extend} from "../utils";
import {ActionType} from "./action";
import {uniqArray} from '../utils';
import offers from '../mocks/offers';

const cities = uniqArray(offers.map((offer) => offer.city));
const initCity = cities[0];

const offersByCity = (offersAll, city) => offersAll.filter((offer) => offer.city === city);

const initialState = {
  city: initCity,
  cities,
  offers: offersByCity(offers, initCity),
  offersAll: offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.GET_OFFERS:
      const city = action.payload;
      return extend(state, {offers: offersByCity(offers, city)});

    default:
      return state;
  }
};

export {reducer};
