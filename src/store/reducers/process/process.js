import {extend} from "@utils";
import {ActionType} from "../../action";
import {SortingType, CITIES_NAMES, StatusType} from '@const';

const initCity = CITIES_NAMES[0];

const basicState = {
  data: null,
  status: StatusType.IDLE,
  error: ``,
};

const makeInit = (basic = basicState) => (object = {}) => Object.assign({}, basic, object);
const init = makeInit();

const Data = {
  OFFERS: `offersGist`,
  HOTEL: `hotelGist`,
  HOTELS_NEARBY: `hotelsNearbyGist`,
  COMMENTS: `commentsGist`,
};

const initialState = {
  city: initCity,
  sort: SortingType.POPULAR,
  [Data.OFFERS]: init(),
  [Data.HOTEL]: init({id: 0}),
  [Data.HOTELS_NEARBY]: init(),
  [Data.COMMENTS]: init(),
};

const makeLoading = (state, key) => (
  extend(state, {[key]: extend(state[key], {status: StatusType.LOADING, error: ``})})
);
const makeSuccess = (state, key, action) => (
  extend(state, {[key]: extend(state[key], {status: StatusType.SUCCESS, error: ``, data: action.payload})})
);
const makeFailed = (state, key, action) => (
  extend(state, {[key]: extend(state[key], {status: StatusType.FAILED, error: action.payload.message})})
);

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.CHANGE_SORT:
      return extend(state, {sort: action.payload});

    case ActionType.CHANGE_OFFER:
      return extend(state, {hotelGist: extend(state.hotelGist, {data: action.payload})});

    case ActionType.LOAD_OFFERS_START:
      return makeLoading(state, Data.OFFERS);
    case ActionType.LOAD_OFFERS_SUCCESS:
      return makeSuccess(state, Data.OFFERS, action);
    case ActionType.LOAD_OFFERS_FAILURE:
      return makeFailed(state, Data.OFFERS, action);

    case ActionType.LOAD_HOTEL_START:
      return makeLoading(state, Data.HOTEL);
    case ActionType.LOAD_HOTEL_SUCCESS:
      return makeSuccess(state, Data.HOTEL, action);
    case ActionType.LOAD_HOTEL_FAILURE:
      return makeFailed(state, Data.HOTEL, action);

    case ActionType.LOAD_HOTELS_NEARBY_START:
      return makeLoading(state, Data.HOTELS_NEARBY);
    case ActionType.LOAD_HOTELS_NEARBY_SUCCESS:
      return makeSuccess(state, Data.HOTELS_NEARBY, action);
    case ActionType.LOAD_HOTELS_NEARBY_FAILURE:
      return makeFailed(state, Data.HOTELS_NEARBY, action);

    case ActionType.LOAD_COMMENTS_START:
      return makeLoading(state, Data.COMMENTS);
    case ActionType.LOAD_COMMENTS_SUCCESS:
      return makeSuccess(state, Data.COMMENTS, action);
    case ActionType.LOAD_COMMENTS_FAILURE:
      return makeFailed(state, Data.COMMENTS, action);

    case ActionType.SEND_COMMENT_START:
      return makeLoading(state, Data.COMMENTS);
    case ActionType.SEND_COMMENT_SUCCESS:
      return makeSuccess(state, Data.COMMENTS, action);
    case ActionType.SEND_COMMENT_FAILURE:
      return makeFailed(state, Data.COMMENTS, action);

    case ActionType.SET_FAVORITE_START:
      return makeLoading(state, Data.OFFERS);
    case ActionType.SET_FAVORITE_SUCCESS:
      return makeSuccess(state, Data.OFFERS, action);
    case ActionType.SET_FAVORITE_FAILURE:
      return makeFailed(state, Data.OFFERS, action);

    default:
      return state;
  }
};

export {process};
