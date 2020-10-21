import {extend} from "../utils";
import {ActionType} from "./action";
import offers from '../mocks/offers';

const initialState = {
  city: `Amsterdam`,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.GET_OFFERS:
      return extend(state, {offers: action.payload});

    case ActionType.GET_OFFERS_BY_CITY:
      const city = action.payload;
      const offersByCity = state.offers.filter((offer) => offer.city === city);
      return extend(state, {offers: offersByCity});

  }

  return state;
};

export {reducer};
