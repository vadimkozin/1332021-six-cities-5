import {CITIES, MONTHS, RATING_STARS_MAX, TypesHousing, SortingType, StatusType} from './const';

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

export const FROM_SORTINGTYPE_TO_FUNC_MAP = {
  [SortingType.POPULAR]: () => getSorter(`id`),
  [SortingType.LOW_TO_HIGH]: () => getSorter(`price`),
  [SortingType.HIGH_TO_LOW]: () => getSorter(`price`, `des`),
  [SortingType.TOP_RATED_FIRST]: () => getSorter(`rating`, `des`),
};

// фильтр
export const filterBy = (collection, fieldName, value) => collection.filter((it) => it[fieldName] === value);

// разделение пропсов на имя класа и остальное
export const splitPropsOnClassNameAndRest = (props) => {
  const {className = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return [className, restProps];
};

// generateClassNames(`button`, {active: true, more: false}, {favorite: true}, [`one`, `two`, {yes: true}]);
//                --> 'button active favorite one two yes'
export const generateClassNames = (...items) => {

  return items.reduce((array, it) => {
    if (Array.isArray(it)) {
      return array.push(generateClassNames(...it));
    }

    switch (typeof it) {
      case `string`:
        array.push(it);
        break;
      case `object`:
        Object.entries(it).forEach(([key, value]) => {
          if (value) {
            array.push(key);
          }
        });
        break;
      case `number`:
        array.push(String(it));
        break;
      default:
        array.push(it);
        break;
    }

    return array;

  }, []).join(` `);
};

export const extend = (a, b = {}) => {
  return Object.assign({}, a, b);
};

export const getCityCenter = (cityName) => CITIES[cityName];

export const isWaitingRequestData = (gistsList) => gistsList.some((gist) => {
  return gist.status === StatusType.IDLE || gist.status === StatusType.LOADING;
});

export const isRequestError = (gistsList) => gistsList.some((gist) => {
  return gist.status === StatusType.FAILED;
});

