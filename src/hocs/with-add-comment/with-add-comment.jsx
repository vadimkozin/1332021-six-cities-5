import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CommentSettings} from '../../const';
import {getHotelId} from '../../store/selectors/offers';
import {sendComment} from '../../store/api-actions';

const withAddComment = (Component) => (props) => {
  const [text, setText] = useState(``);
  const [starsCount, setStarsCount] = useState(0);
  const [isDisabledSubmit, setDisabledSubmit] = useState(true);

  const hotelId = useSelector(getHotelId);

  const dispatch = useDispatch();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    setDisabledSubmit(true);
    dispatch(sendComment({hotelId, comment: text, rating: starsCount}));
  };

  const handleStarChange = (value) => {
    const numberStars = Number(value);
    setStarsCount(numberStars);
    setStateButtonSubmit(text.length, numberStars);
  };

  const handleTextChange = (value) => {
    setText(value);
    setStateButtonSubmit(value.length, starsCount);
  };

  const setStateButtonSubmit = (textLength, numberStars) => {
    const flag = numberStars === 0
      || textLength < CommentSettings.TEXT_LENGTH_MIN
      || textLength > CommentSettings.TEXT_LENGTH_MAX;

    setDisabledSubmit(flag);
  };

  return (
    <Component
      {...props}
      onFormSubmit={handleFormSubmit}
      onStarChange={handleStarChange}
      onTextChange={handleTextChange}
      isDisabledSubmit={isDisabledSubmit}
    />
  );
};

export default withAddComment;
