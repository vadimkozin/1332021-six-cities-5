import {MONTHS, RATING_STARS_MAX, TypesHousing} from './const';

// добавляет ведущие нули: ( '2' => '02')
const addZeros = (number, digitsInNumber = 2) => {
  return `${number}`.padStart(digitsInNumber, `0`);
};

// рейтинг в процентах
// export const getRatingProc = (rating) => Math.round(rating / RATING_STARS_MAX * 100); // 0, 1, 2, ... 100
export const getRatingProc = (rating) => Math.round(rating) / RATING_STARS_MAX * 100; // 0, 20, 40, 60, 80, 100

// тип жилья для отображения
export const getHousingView = (name) => {
  const keys = Object.keys(TypesHousing);
  const type = keys.find((key) => TypesHousing[key].name === name);
  return TypesHousing[type].view;
};

// уникальные id (пока нет сервера)
export const getUUIDGenerator = (start = 0) => {
  let id = start;

  return () => id++;
};

export const uuid = getUUIDGenerator();

// уникальные элементы массива
export const uniqArray = (array) => {
  return Array.from(new Set(array));
};

// форматривание дат: my:'October 2020' ymd:'2020-10-25'
export const formatDate = {
  my: (date) => `${MONTHS[date.getMonth()]} ${date.getFullYear()}`,
  ymd: (date) => `${date.getFullYear()}-${addZeros(date.getMonth() + 1)}-${addZeros(date.getDate())}`,
};

// сортировка
export const getSorter = (fieldName, order = `asc`) => {
  return (a, b) => (a[fieldName] - b[fieldName]) * (order === `asc` ? 1 : -1);
};

// фильтр
export const filterBy = (collection, fieldName, value) => collection.filter((it) => it[fieldName] === value);
