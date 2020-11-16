import {extend} from "@utils";
import {ActionType} from "../../action";
import {SortingType, CITIES_NAMES} from '@const';

const initCity = CITIES_NAMES[0];

const initialState = {
  city: initCity,
  offer: null,
  sort: SortingType.POPULAR,
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.CHANGE_SORT:
      return extend(state, {sort: action.payload});

    case ActionType.CHANGE_OFFER:
      return extend(state, {offer: action.payload});

    default:
      return state;
  }
};

export {process};
