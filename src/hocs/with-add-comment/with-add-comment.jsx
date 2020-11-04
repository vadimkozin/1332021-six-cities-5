import React, {useState} from 'react';
import {CommentSettings} from '@const';

const withAddComment = (Component) => (props) => {
  const [text, setText] = useState(``);
  const [starsCount, setStarsCount] = useState(0);
  const [isDisabledSubmit, setDisabledSubmit] = useState(true);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    // ...
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
      || textLength > CommentSettings.TEXT_LENGTH_MAX
      ? true : false;

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
