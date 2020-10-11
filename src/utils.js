import {MONTHS, RATING_STAR_MAX, TypesHousing} from './const';

// добавляет ведущие нули: ( '2' => '02')
const addZeros = (number, digitsInNumber = 2) => {
  let n = String(number);
  while (n.length < digitsInNumber) {
    n = `0` + n;
  }
  return n;
};

// рейтинг в процентах
export const getRatingProc = (rating) => Math.round(rating / RATING_STAR_MAX * 100);

// тип жилья для отображения
export const getHousingView = (name) => {
  const keys = Object.keys(TypesHousing);
  const type = keys.find((key) => TypesHousing[key].name === name);
  return TypesHousing[type].view;
};

// уникальные id (пока нет сервера)
export class UniqId {
  constructor(start = 0) {
    this.start = start;
  }
  get next() {
    return this.start++;
  }
}

// форматривание дат: my:'October 2020' ymd:'2020-10-25'
export const formatDate = {
  my: (date) => `${MONTHS[date.getMonth()]} ${date.getFullYear()}`,
  ymd: (date) => `${date.getFullYear()}-${addZeros(date.getMonth() + 1)}-${addZeros(date.getDate())}`,
};

// сортировка
export const sortPriceLowToHight = (a, b) => a.price - b.price;
export const sortPriceHightToLow = (a, b) => b.price - a.price;
export const sortRatedHightToLow = (a, b) => b.rating - a.rating;
export const sortTown = (a, b) => {
  if (a.town > b.town) {
    return 1;
  }
  if (a.town < b.town) {
    return -1;
  }
  return 0;
};
