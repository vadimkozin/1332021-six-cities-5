import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const Settings = {
  NUMBER_RENTAL_OFFER: 312
};

ReactDOM.render(
    <App
      numberOffer={Settings.NUMBER_RENTAL_OFFER}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
