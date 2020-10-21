import {extend} from "../utils";
import {ActionType} from "./action";
import {offers} from '../mocks/offers';

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
  }

  return state;
};

export {reducer};
