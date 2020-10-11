import React from 'react';
import {RATING_STAR_MAX} from '../../const';
import {RatingStarsType} from '../../types/types';

const RatingStars = (props) => {
  const {className = `place-card__stars rating__stars`, rating} = props;

  // const ratingProc = Math.round(rating / RATING_STAR_MAX * 100); // 0, 1, 2, ... 100
  const ratingProc = Math.round(rating) / RATING_STAR_MAX * 100; // 0, 20, 40, 60, 80, 100
  const ratingStyle = {width: ratingProc + `%`};

  return (
    <div className={className}>
      <span style={ratingStyle}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
};


RatingStars.propTypes = RatingStarsType;

export default RatingStars;
