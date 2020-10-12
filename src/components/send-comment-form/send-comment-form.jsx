import React, {PureComponent} from 'react';
import {CommentSettings} from '../../const';

class SendCommentForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      text: null,
      starCount: 0,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleStarChange = this.handleStarChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    // console.log(`state:`, this.state);
  }

  handleStarChange(evt) {
    evt.preventDefault();

    if (!evt.target.type === `radio`) {
      return;
    }

    this.setState({starCount: Number(evt.target.value)});
  }

  handleTextAreaChange(evt) {
    evt.preventDefault();
    this.setState({text: evt.target.value});
  }

  render() {
    const isDisabled =
      !this.state.text
      || this.state.text.length < CommentSettings.TEXT_LENGTH_MIN
      || this.state.starCount === 0 ? true : false;

    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating" onChange={this.handleStarChange}>
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea
          id="review"
          name="review"
          className="reviews__textarea form__textarea"
          placeholder="Tell how was your stay, what you like and what can be improved"
          minLength={CommentSettings.TEXT_LENGTH_MIN}
          maxLength={CommentSettings.TEXT_LENGTH_MAX}
          onChange={this.handleTextAreaChange}>
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CommentSettings.TEXT_LENGTH_MIN} characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled ? true : undefined}>Submit</button>
        </div>
      </form>
    );
  }
}

export default SendCommentForm;
