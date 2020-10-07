import {MONTHS} from './const';

export const formatDate = (date) => `${MONTHS[date.getMonth()]} ${date.getDate()}`;
