import {nanoid} from 'nanoid';
import {AvatarGenerator} from 'random-avatar-generator';
import {TypesHousing} from '../const';

const TITLES = [
  `Beautiful studio at great location`,
  `Excellent location`,
  `Amazing view from the window`,
  `Gorgeous view of the sunrise`,
  `Everything you need is available in 5 minutes`,
  `Everything you need`,
];

export const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates blanditiis dicta ad non porro dignissimos officia asperiores vel repellendus earum, sapiente enim cum cupiditate, soluta possimus. Quidem at aliquam nihil?`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, cum?`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates, velit minima repellat praesentium commodi ea fugiat? Reprehenderit, architecto sint.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis maxime adipisci sed voluptate ipsum!`,
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. `,
  `Nostrum officiis laborum est debitis facilis nulla nihil laboriosam, sapiente rerum nesciunt eveniet.`,
  `Laudantium facere, totam eligendi aspernatur corrupti dolorem suscipit numquam, vero similique.`,
  `Perspiciatis distinctio eum. Aut veritatis ipsum provident tempore?`,
  `Fugiat quia rerum sed minima iusto autem ut maxime molestias libero odio natus temporibus labore tempore magni officiis cumque nemo expedita itaque, possimus et praesentium fuga dicta, pariatur ex? Necessitatibus cum, ipsam quam voluptate, aut perferendis quaerat recusandae amet accusantium assumenda perspiciatis numquam quisquam, animi exercitationem provident fugiat nisi.`,
  `Culpa aliquam cumque modi labore quae est ad illum nobis molestias.`,
];

const HOUSEHOLD_ITEMS = [
  `WiFi`,
  `Heating`,
  `Kitchen`,
  `Cable TV`,
  `Washing machine`,
  `Coffee machine`,
  `Dishwasher`,
  `Towels`,
  `Baby seat`,
  `Electric kettle`,
  `Slippers`,
];

export const NAMES = [
  `ivan`,
  `petr`,
  `alex`,
  `angelina`,
  `maksim`,
  `vadim`,
  `anton`,
  `irina`,
  `inna`,
  `oksana`,
];

const URL_PHOTO = `http://picsum.photos/260/200?r=`;

const generator = new AvatarGenerator();

const getRandomPhoto = () => `${URL_PHOTO}${Math.random()}`;

// возвращает случайное число из диапазона между min и max (оба включены)
export const getRandomInteger = (min = 0, max = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomFloat = (min = 0, max = 0, fixed = 2) => Number(((Math.random() * (max - min)) + min).toFixed(fixed));

// добавляет ведущие нули: ( '2' => '02')
// const addZeros = (number, digitsInNumber = 2) => {
//   let n = String(number);
//   while (n.length < digitsInNumber) {
//     n = `0` + n;
//   }
//   return n;
// };

export const getRandomFrom = (array) => {
  const index = getRandomInteger(0, array.length - 1);
  return array[index];
};

const getRandomPartArray = (array) => {
  const items = getRandomInteger(0, array.length - 1);
  const indexes = [];

  for (let i = 0; i < items; i++) {
    indexes[i] = getRandomInteger(0, array.length - 1);
  }

  return Array.from(new Set(indexes)).map((index) => array[index]);
};

const getRandomType = () => {
  const keys = Object.keys(TypesHousing);
  const index = getRandomInteger(0, keys.length - 1);

  return keys[index].name;
};

const getRandomPictures = (from = 1, to = 5) => {
  const count = getRandomInteger(from, to);

  return Array(count).fill().map((it, i) => ({
    src: getRandomPhoto(),
    alt: `Place image-${i}`,
  }));

};

const getRandomOwner = () => {
  return {
    avatar: generator.generateRandomAvatar(),
    name: getRandomFrom(NAMES),
    isSuper: Boolean(getRandomInteger(0, 1)),
  };
};

const getOffers = (count) => {
  return Array(count).fill().map(() => ({
    id: nanoid(8),
    pictures: getRandomPictures(3, 5),
    title: getRandomFrom(TITLES),
    description: getRandomFrom(DESCRIPTIONS),
    isPremium: Boolean(getRandomInteger(0, 1)),
    typeHousing: getRandomType(),
    rating: getRandomFloat(0, 5),
    bedroomsNumber: getRandomInteger(1, 5),
    guestsMax: getRandomInteger(1, 3),
    price: getRandomInteger(50, 700),
    householdItems: getRandomPartArray(HOUSEHOLD_ITEMS),
    owner: getRandomOwner(),
  }));
};

const offers = getOffers(5);

export default offers;
