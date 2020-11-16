import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import {requireAuthorization} from './store/action';
import {fetchQffersList} from './store/api-actions';
import {AuthorizationStatus} from './const';
import reviews from './mocks/reviews'; // еще нет в задании api-ссылки для получения отзывов, поэтому моки

const api = createAPI(
    () => store.dispath(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(fetchQffersList())
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          reviews={reviews}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});

