import {extend} from "@utils";
import {ActionType} from "../../action";
import {SortingType, CITIES_NAMES, StatusType} from '@const';

const initCity = CITIES_NAMES[0];

const basicState = {
  data: null,
  // isLoading: false,
  status: StatusType.IDLE,
  error: ``,
};

const makeInit = (basic = basicState) => (object = {}) => Object.assign({}, basic, object);
const init = makeInit();

const extendLoading = (state, key) => ({[key]: Object.assign({}, state[key], {status: StatusType.LOADING, error: ``})});
const extendSuccess = (state, key, action) => ({[key]: Object.assign({}, state[key], {status: StatusType.SUCCESS, error: ``, data: action.payload})});
const extendFailed = (state, key, action) => ({[key]: Object.assign({}, state[key], {status: StatusType.FAILED, error: action.payload.message})});

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

      // case ActionType.CHANGE_OFFER:
      //   return extend(state, {offer: action.payload});

    case ActionType.LOAD_OFFER_BY_ID:
      return extend(state, {offer: action.payload});


    case ActionType.CHANGE_OFFER:
      // return extend(state, {offer: action.payload});
      return extend(state, {hotelGist: extend(state.hotelGist, {data: action.payload})});

    case ActionType.SET_HOTEL_ID:
      return extend(state, {hotelGist: extend(state.hotelGist, {id: action.payload})});

    case ActionType.LOAD_HOTEL_START:
      // return extend(state, {hotelGist: extend(state.hotelGist, {status: StatusType.LOADING, error: ``})});
      return extend(state, extendLoading(state, `hotelGist`));

    case ActionType.LOAD_HOTEL_SUCCESS:
      // return extend(state, {hotelGist: extend(state.hotelGist, {status: StatusType.SUCCESS, data: action.payload})});
      return extend(state, extendSuccess(state, `hotelGist`, action));

    case ActionType.LOAD_HOTEL_FAILURE:
      // return extend(state, {hotelGist: extend(state.hotelGist, {status: StatusType.FAILED, error: action.payload.message})});
      return extend(state, extendFailed(state, `hotelGist`, action));

    case ActionType.LOAD_HOTELS_NEARBY_START:
      // return extend(state, {hotelsNearbyGist: extend(state.hotelsNearbyGist, {status: StatusType.LOADING, error: ``})});
      return extend(state, extendLoading(state, `hotelsNearbyGist`));

    case ActionType.LOAD_HOTELS_NEARBY_SUCCESS:
      // return extend(state, {hotelsNearbyGist: extend(state.hotelsNearbyGist, {status: StatusType.SUCCESS, data: action.payload})});
      return extend(state, extendSuccess(state, `hotelsNearbyGist`, action));

    case ActionType.LOAD_HOTELS_NEARBY_FAILURE:
      // return extend(state, {hotelsNearbyGist: extend(state.hotelsNearbyGist, {status: StatusType.FAILED, error: action.payload.message})});
      return extend(state, extendFailed(state, `hotelsNearbyGist`, action));


    case ActionType.LOAD_COMMENTS_START:
      // return extend(state, {commentsGist: extend(state.commentsGist, {status: StatusType.LOADING, error: ``})});
      return extend(state, extendLoading(state, `commentsGist`));

    case ActionType.LOAD_COMMENTS_SUCCESS:
      // return extend(state, {commentsGist: extend(state.commentsGist, {status: StatusType.SUCCESS, data: action.payload})});
      return extend(state, extendSuccess(state, `commentsGist`, action));

    case ActionType.LOAD_COMMENTS_FAILURE:
      // return extend(state, {commentsGist: extend(state.commentsGist, {status: StatusType.FAILED, error: action.payload.message})});
      return extend(state, extendFailed(state, `commentsGist`, action));

    default:
      return state;
  }
};

export {process};
