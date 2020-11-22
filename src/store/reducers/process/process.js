import {extend} from "@utils";
import {ActionType} from "../../action";
import {SortingType, CITIES_NAMES} from '@const';

const initCity = CITIES_NAMES[0];

const basicState = {
  data: null,
  isLoading: false,
  error: ``,
};

const makeInit = (basic = basicState) => (object = {}) => Object.assign({}, basic, object);
const init = makeInit();

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

    case ActionType.CHANGE_OFFER:
      return extend(state, {offer: action.payload});

    case ActionType.LOAD_OFFER_BY_ID:
      return extend(state, {offer: action.payload});


    case ActionType.SET_HOTEL_ID:
      return extend(state, {hotelGist: extend(state.hotelGist, {id: action.payload})});

    case ActionType.LOAD_HOTEL_START:
      return extend(state, {hotelGist: extend(state.hotelGist, {isLoading: true, error: ``})});

    case ActionType.LOAD_HOTEL_SUCCESS:
      return extend(state, {hotelGist: extend(state.hotelGist, {isLoading: false, data: action.payload})});

    case ActionType.LOAD_HOTEL_FAILURE:
      return extend(state, {hotelGist: extend(state.hotelGist, {isLoading: false, error: action.payload.message})});


    case ActionType.LOAD_HOTELS_NEARBY_START:
      return extend(state, {hotelsNearbyGist: extend(state.hotelsNearbyGist, {isLoading: true, error: ``})});

    case ActionType.LOAD_HOTELS_NEARBY_SUCCESS:
      return extend(state, {hotelsNearbyGist: extend(state.hotelsNearbyGist, {isLoading: false, data: action.payload})});

    case ActionType.LOAD_HOTELS_NEARBY_FAILURE:
      return extend(state, {hotelsNearbyGist: extend(state.hotelsNearbyGist, {isLoading: false, error: action.payload.message})});


    case ActionType.LOAD_COMMENTS_START:
      return extend(state, {commentsGist: extend(state.commentsGist, {isLoading: true, error: ``})});

    case ActionType.LOAD_COMMENTS_SUCCESS:
      return extend(state, {commentsGist: extend(state.commentsGist, {isLoading: false, data: action.payload})});

    case ActionType.LOAD_COMMENTS_FAILURE:
      return extend(state, {commentsGist: extend(state.commentsGist, {isLoading: false, error: action.payload.message})});

    default:
      return state;
  }
};

export {process};
