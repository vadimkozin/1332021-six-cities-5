import React, {PureComponent} from 'react';

class SendCommentForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      text: null,
      starCount: 0,
    };

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleStarChange = this._handleStarChange.bind(this);
    this._handleTextAreaChange = this._handleTextAreaChange.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    // console.log(`state:`, this.state);
  }

  _handleStarChange(evt) {
    evt.preventDefault();

    if (!evt.target.type === `radio`) {
      return;
    }

    this.setState({starCount: evt.target.value});
  }

  _handleTextAreaChange(evt) {
    evt.preventDefault();
    this.setState({text: evt.target.value});
  }

  render() {
    const isDisabled =
      !this.state.text
      || this.state.text.length < 50
      || this.state.starCount === 0 ? `disabled` : ``;

    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating" onChange={this._handleStarChange}>
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
          minLength="50"
          maxLength="300"
          onChange={this._handleTextAreaChange}>
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
        </div>
      </form>
    );
  }
}

export default SendCommentForm;
