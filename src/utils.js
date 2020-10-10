import {MONTHS, RATING_STAR_MAX, TypesHousing} from './const';

export const formatDate = (date) => `${MONTHS[date.getMonth()]} ${date.getDate()}`;

export const getRatingProc = (rating) => Math.round(rating / RATING_STAR_MAX * 100);

export const getHousingView = (name) => {
  const keys = Object.keys(TypesHousing);
  const type = keys.find((key) => TypesHousing[key].name === name);
  return TypesHousing[type].view;
};

export class UnicId {
  constructor(start = 0) {
    this.start = start;
  }
  get next() {
    return this.start++;
  }
}


