import {extend} from "@utils";
import {ActionType} from "../../action";
import {CITIES_NAMES} from '@const';

const initialState = {
  cities: CITIES_NAMES,
  offers: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});

    default:
      return state;
  }
};

export {data};
