import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {reducer} from "./store/reducer";

const Settings = {
  NUMBER_RENTAL_OFFER: 312
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        numberOffer={Settings.NUMBER_RENTAL_OFFER}
        offers={offers}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
