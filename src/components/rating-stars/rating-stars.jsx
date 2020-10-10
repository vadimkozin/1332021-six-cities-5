import React from 'react';
import {RATING_STAR_MAX} from '../../const';
import {RatingStarsType} from '../../types/types';

const RatingStars = (props) => {
  const {className = `place-card__stars rating__stars`, rating} = props;

  const ratingProc = Math.round(rating / RATING_STAR_MAX * 100);
  const ratingStyle = {width: ratingProc + `%`};

  // <div className="reviews__stars rating__stars">
  //   <span style={{width: `80%`}}></span>
  //   <span className="visually-hidden">Rating</span>
  // </div>

  return (
    <div className={className}>
      <span style={ratingStyle}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
};


RatingStars.propTypes = RatingStarsType;

export default RatingStars;
