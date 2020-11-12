import React from 'react';
import {CommentSettings} from '@const';
import {ADD_COMMENT_TYPE} from '@types';

const Stars = {
  1: `terribly`,
  2: `badly`,
  3: `not bad`,
  4: `good`,
  5: `perfect`,
};

// для пользователя расположение звёзд: слева terribly - справа perfect
// а для верстальщика (точнее правил css) - наоборот, чтобы звёздочки убобнее было закрашивать
const starsDisplay = Object.keys(Stars).sort((a, b) => b - a);

const AddComment = (props) => {
  const {onFormSubmit, onStarChange, onTextChange, isDisabledSubmit} = props;

  const getStarsList = () => {

    return starsDisplay.map((star) => {
      const id = `${star}-stars`; // 1-stars ... 5-stars

      return <React.Fragment key={star}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id={id}
          type="radio"
          defaultValue={star}
        />
        <label htmlFor={id} className="reviews__rating-label form__rating-label" title={Stars[star]}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </React.Fragment>;
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div onChange={(evt) => onStarChange(evt.target.value)} className="reviews__rating-form form__rating">
        {getStarsList()}
      </div>
      <textarea
        id="review"
        name="review"
        className="reviews__textarea form__textarea"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={CommentSettings.TEXT_LENGTH_MIN}
        maxLength={CommentSettings.TEXT_LENGTH_MAX}
        onChange={(evt) => onTextChange(evt.target.value)}>
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CommentSettings.TEXT_LENGTH_MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabledSubmit || undefined}>Submit</button>
      </div>
    </form>
  );
};

AddComment.propTypes = ADD_COMMENT_TYPE;

export default AddComment;
