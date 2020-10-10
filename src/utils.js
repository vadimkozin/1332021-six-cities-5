import {MONTHS} from './const';

export const formatDate = (date) => `${MONTHS[date.getMonth()]} ${date.getDate()}`;

export class UnicId {
  constructor(start = 0) {
    this.start = start;
  }
  get next() {
    return this.start++;
  }
}
