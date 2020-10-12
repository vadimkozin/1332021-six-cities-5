import React from 'react';
import {RATING_STARS_TYPE} from '../../types/types';
import {getRatingProc} from '../../utils';

const RatingStars = (props) => {
  const {className = `place-card__stars rating__stars`, rating} = props;
  const ratingStyle = {width: getRatingProc(rating) + `%`};

  return (
    <div className={className}>
      <span style={ratingStyle}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
};

RatingStars.propTypes = RATING_STARS_TYPE;

export default RatingStars;
