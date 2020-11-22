export const CITIES = {
  Paris: [48.856614, 2.3522219],
  Cologne: [50.937531, 6.960278600000038],
  Brussels: [50.8503396, 4.3517103],
  Amsterdam: [52.3702157, 4.8951679],
  Hamburg: [53.5510846, 9.99368179999999],
  Dusseldorf: [51.2277411, 6.773455600000034],
};
export const CITIES_NAMES = Object.keys(CITIES);

export const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

export const RATING_STARS_MAX = 5;

export const OFFER_PICTURE_MAX = 6;

export const REVIEW_OUTPUT_MAX = 10;

export const MAP_ZOOM_DEFAULT = 12;

export const HOTELS_NEARBY_MAX = 3;

export const CommentSettings = {
  TEXT_LENGTH_MIN: 50,
  TEXT_LENGTH_MAX: 300,
};

export const TypesHousing = {
  APARTMENT: {name: `apartment`, view: `Apartment`},
  ROOM: {name: `room`, view: `Private Room`},
  HOUSE: {name: `house`, view: `House`},
  HOTEL: {name: `hotel`, view: `Hotel`}
};

export const OfferCardType = {
  CITY_PLACE: 1,
  NEAR_PLACE: 2,
};

export const MapType = {
  VERTICAL: 1,
  HORIZONTAL: 2,
};

export const SortingType = {
  POPULAR: `popular`, // в порядке, полученном с сервера
  LOW_TO_HIGH: `to-high`, // От дешёвых к дорогим.
  HIGH_TO_LOW: `to-low`, // От дорогих к дешёвым.
  TOP_RATED_FIRST: `top-rated` // От высокого рейтинга к низкому
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER_ID: `/offer/:id`,
};

export const APIRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  OFFER_ID: `/hotels/`,
};

export const StatusType = {
  IDLE: `idle`,
  LOADING: `loading`,
  SUCCESS: `succes`,
  FAILED: `failed`,
};
