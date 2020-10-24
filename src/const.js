export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

export const RATING_STARS_MAX = 5;

export const OFFER_PICTURE_MAX = 6;

export const REVIEW_OUTPUT_MAX = 10;

export const MAP_ZOOM_DEFAULT = 12;

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

export const TypesOfferCard = {
  CityPlace: 1,
  NearPlace: 2,
};

export const TypesMap = {
  Vertical: 1,
  Horizontal: 2,
};

export const SortingType = {
  POPULAR: `popular`, // в порядке, полученном с сервера
  LOW_TO_HIGH: `to-high`, // От дешёвых к дорогим.
  HIGH_TO_LOW: `to-low`, // От дорогих к дешёвым.
  TOP_RATED_FIRST: `top-rated` // От высокого рейтинга к низкому
};
