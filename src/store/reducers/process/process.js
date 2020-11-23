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

const makeLoading = (state, key) => (
  extend(state, {[key]: extend(state[key], {status: StatusType.LOADING, error: ``})})
);
const makeSuccess = (state, key, action) => (
  extend(state, {[key]: extend(state[key], {status: StatusType.SUCCESS, error: ``, data: action.payload})})
);
const makeFailed = (state, key, action) => (
  extend(state, {[key]: extend(state[key], {status: StatusType.FAILED, error: action.payload.message})})
);


const initialState = {
  city: initCity,
  offer: null,
  sort: SortingType.POPULAR,

  hotelGist: init({id: 0}),
  hotelsNearbyGist: init(),
  commentsGist: init(),
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.CHANGE_SORT:
      return extend(state, {sort: action.payload});

    case ActionType.LOAD_OFFER_BY_ID:
      return extend(state, {offer: action.payload});


    case ActionType.CHANGE_OFFER:
      return extend(state, {hotelGist: extend(state.hotelGist, {data: action.payload})});

    case ActionType.LOAD_HOTEL_START:
      return makeLoading(state, `hotelGist`);

    case ActionType.LOAD_HOTEL_SUCCESS:
      return makeSuccess(state, `hotelGist`, action);

    case ActionType.LOAD_HOTEL_FAILURE:
      return makeFailed(state, `hotelGist`, action);

    case ActionType.LOAD_HOTELS_NEARBY_START:
      return makeLoading(state, `hotelsNearbyGist`);

    case ActionType.LOAD_HOTELS_NEARBY_SUCCESS:
      return makeSuccess(state, `hotelsNearbyGist`, action);

    case ActionType.LOAD_HOTELS_NEARBY_FAILURE:
      return makeFailed(state, `hotelsNearbyGist`, action);

    case ActionType.LOAD_COMMENTS_START:
      return makeLoading(state, `commentsGist`);

    case ActionType.LOAD_COMMENTS_SUCCESS:
      return makeSuccess(state, `commentsGist`, action);

    case ActionType.LOAD_COMMENTS_FAILURE:
      return makeFailed(state, `commentsGist`, action);

    default:
      return state;
  }
};

export {process};
