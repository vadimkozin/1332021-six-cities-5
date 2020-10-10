import {MONTHS, RATING_STAR_MAX, TypesHousing} from './const';

// export const formatDate = (date) => `${MONTHS[date.getMonth()]} ${date.getDate()}`;

// добавляет ведущие нули: ( '2' => '02')
const addZeros = (number, digitsInNumber = 2) => {
  let n = String(number);
  while (n.length < digitsInNumber) {
    n = `0` + n;
  }
  return n;
};

// форматривание дат: my:'October 2020' ymd:'2020-10-25'
export const formatDate = {
  my: (date) => `${MONTHS[date.getMonth()]} ${date.getFullYear()}`,
  ymd: (date) => `${date.getFullYear()}-${addZeros(date.getMonth() + 1)}-${addZeros(date.getDate())}`,
};

export const getRatingProc = (rating) => Math.round(rating / RATING_STAR_MAX * 100);

export const getHousingView = (name) => {
  const keys = Object.keys(TypesHousing);
  const type = keys.find((key) => TypesHousing[key].name === name);
  return TypesHousing[type].view;
};

export class UniqId {
  constructor(start = 0) {
    this.start = start;
  }
  get next() {
    return this.start++;
  }
}


