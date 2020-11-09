import {extend, uniqArray} from "@utils";
import {ActionType} from "./action";
import offers from '../mocks/offers';
import {SortingType} from '@const';

const cities = uniqArray(offers.map((offer) => offer.city));
const initCity = cities[0];

const getOffersByCity = (offersAll, city) => offersAll.filter((offer) => offer.city === city);

const initialState = {
  city: initCity,
  cities,
  offers: getOffersByCity(offers, initCity),
  activeOfferId: null,

  sort: SortingType.POPULAR,
  offer: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.GET_OFFERS:
      const city = action.payload;
      return extend(state, {offers: getOffersByCity(offers, city)});

    case ActionType.CHANGE_OFFER:
      const activeOfferId = action.payload;
      return extend(state, {activeOfferId});

    case ActionType.RESET_ACTIVE_OFFER_ID:
      const value = action.payload;
      return extend(state, {activeOfferId: value});

    case ActionType.CHANGE_SORT_NEW:
      const sort = action.payload;
      return extend(state, {sort});

    case ActionType.CHANGE_OFFER_NEW:
      const offer = action.payload;
      return extend(state, {offer});

    default:
      return state;
  }
};

export {reducer};
