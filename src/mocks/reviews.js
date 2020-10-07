import {AvatarGenerator} from 'random-avatar-generator';
import {NAMES, DESCRIPTIONS, getRandomFrom, getRandomInteger} from '../mocks/offers';
import {formatDate} from '../utils';

const generator = new AvatarGenerator();

const getReviews = (count) => {
  return Array(count).fill().map(() => ({
    avatar: generator.generateRandomAvatar(),
    name: getRandomFrom(NAMES),
    rating: getRandomInteger(1, 5),
    date: new Date(),
    text: getRandomFrom(DESCRIPTIONS),
  }));
};

export default getReviews(10);
