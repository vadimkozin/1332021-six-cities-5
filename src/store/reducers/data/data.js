import {extend} from "@utils";
import {ActionType} from "../../action";
import {CITIES_NAME} from '@const';

const initialState = {
  cities: CITIES_NAME,
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
