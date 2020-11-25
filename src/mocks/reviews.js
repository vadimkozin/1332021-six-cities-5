import {AvatarGenerator} from 'random-avatar-generator';
import {NAMES, DESCRIPTIONS, getRandomFrom, getRandomFloat, getRandomDate, getRandomInteger} from '../mocks/offers';
import {getUUIDGenerator} from '../utils';

const generator = new AvatarGenerator();

const uuid = getUUIDGenerator();

const getReviews = (count) => {
  return Array(count).fill().map(() => ({
    id: uuid(),
    text: getRandomFrom(DESCRIPTIONS),
    date: getRandomDate(),
    rating: getRandomFloat(1, 5),
    user: {
      id: uuid(),
      avatarUrl: generator.generateRandomAvatar(),
      name: getRandomFrom(NAMES),
      isPro: Boolean(getRandomInteger(0, 1)),
    },
  }));
};
export default getReviews(3);
