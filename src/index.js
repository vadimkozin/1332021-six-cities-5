import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import {createAPI} from './services/api';
import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import {requireAuthorization} from './store/action';
import {fetchQffersList, checkAuth} from './store/api-actions';
import {AuthorizationStatus} from './const';

import offers from './mocks/offers';
import reviews from './mocks/reviews';
// import {reducer} from "./store/reducer";
import thunk from 'redux-thunk';

const api = createAPI(
    () => store.dispath(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
// );
const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

Promise.all([
  store.dispatch(fetchQffersList()),
  // store.dispatch(checkAuth()),
])
.then(() => {
  console.log(store.getState());
  ReactDOM.render(
      <Provider store={store}>
        <App
          offers={offers}
          reviews={reviews}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});

