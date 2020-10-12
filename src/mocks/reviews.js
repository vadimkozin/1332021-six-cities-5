import {AvatarGenerator} from 'random-avatar-generator';
import {NAMES, DESCRIPTIONS, getRandomFrom, getRandomFloat, getRandomDate} from '../mocks/offers';
import {getUUIDGenerator} from '../utils';

const generator = new AvatarGenerator();

const uuid = getUUIDGenerator();

const getReviews = (count) => {
  return Array(count).fill().map(() => ({
    id: uuid(),
    avatar: generator.generateRandomAvatar(),
    name: getRandomFrom(NAMES),
    rating: getRandomFloat(1, 5),
    date: getRandomDate(),
    text: getRandomFrom(DESCRIPTIONS),
  }));
};

export default getReviews(33);
