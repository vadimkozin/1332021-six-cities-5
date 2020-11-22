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

  hotel: init({id: 0}),
  hotelsNearby: init(),
  comments: init(),
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
      return extend(state, {hotel: extend(state.hotel, {id: action.payload})});

    case ActionType.LOAD_HOTEL_START:
      return extend(state, {hotel: extend(state.hotel, {isLoading: true, error: ``})});

    case ActionType.LOAD_HOTEL_SUCCESS:
      return extend(state, {hotel: extend(state.hotel, {isLoading: false, data: action.payload})});

    case ActionType.LOAD_HOTEL_FAILURE:
      return extend(state, {hotel: extend(state.hotel, {isLoading: false, error: action.payload.message})});


    case ActionType.LOAD_HOTELS_NEARBY_START:
      return extend(state, {hotelsNearby: extend(state.hotelsNearby, {isLoading: true, error: ``})});

    case ActionType.LOAD_HOTELS_NEARBY_SUCCESS:
      return extend(state, {hotelsNearby: extend(state.hotelsNearby, {isLoading: false, data: action.payload})});

    case ActionType.LOAD_HOTELS_NEARBY_FAILURE:
      return extend(state, {hotelsNearby: extend(state.hotelsNearby, {isLoading: false, error: action.payload.message})});


    case ActionType.LOAD_COMMENTS_START:
      return extend(state, {comments: extend(state.comments, {isLoading: true, error: ``})});

    case ActionType.LOAD_COMMENTS_SUCCESS:
      return extend(state, {comments: extend(state.comments, {isLoading: false, data: action.payload})});

    case ActionType.LOAD_COMMENTS_FAILURE:
      return extend(state, {comments: extend(state.comments, {isLoading: false, error: action.payload.message})});

    default:
      return state;
  }
};

export {process};
