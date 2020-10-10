import {AvatarGenerator} from 'random-avatar-generator';
import {NAMES, DESCRIPTIONS, getRandomFrom, getRandomFloat} from '../mocks/offers';
import {UniqId} from '../utils';

const generator = new AvatarGenerator();

const uniqId = new UniqId();

const getReviews = (count) => {
  return Array(count).fill().map(() => ({
    id: uniqId.next,
    avatar: generator.generateRandomAvatar(),
    name: getRandomFrom(NAMES),
    rating: getRandomFloat(1, 5),
    date: new Date(),
    text: getRandomFrom(DESCRIPTIONS),
  }));
};

export default getReviews(33);
