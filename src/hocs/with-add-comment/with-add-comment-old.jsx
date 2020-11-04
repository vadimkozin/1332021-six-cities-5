import React, {PureComponent} from 'react';
import {CommentSettings} from '@const';

const withAddComment = (Component) => {
  class WithAddComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
        starsCount: 0,
        isDisabledSubmit: true,
      };

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleStarChange = this.handleStarChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleFormSubmit(evt) {
      evt.preventDefault();
    }

    handleStarChange(value) {
      const starsCount = Number(value);

      this.setState({starsCount});
      this.setStateButtonSubmit(this.state.text.length, starsCount);
    }

    handleTextChange(value) {
      this.setState({text: value});
      this.setStateButtonSubmit(value.length, this.state.starsCount);
    }

    setStateButtonSubmit(textLength, starsCount) {
      const isDisabledSubmit = starsCount === 0
        || textLength < CommentSettings.TEXT_LENGTH_MIN
        || textLength > CommentSettings.TEXT_LENGTH_MAX
        ? true : false;

      this.setState({isDisabledSubmit});
    }

    render() {
      return <Component
        onFormSubmit={this.handleFormSubmit}
        onStarChange={this.handleStarChange}
        onTextChange={this.handleTextChange}
        isDisabledSubmit={this.state.isDisabledSubmit}
        {...this.props}
      />;
    }
  }

  WithAddComment.propTypes = {};

  return WithAddComment;
};

export default withAddComment;
