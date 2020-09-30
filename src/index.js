import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  NUMBER_RENTAL_OFFER: 312
};

ReactDOM.render(
    <App numberRentalOffer={Settings.NUMBER_RENTAL_OFFER}></App>,
    document.querySelector(`#root`)
);
