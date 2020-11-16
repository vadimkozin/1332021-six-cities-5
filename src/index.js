import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import {requireAuthorization} from './store/action';
import {fetchQffersList, checkAuth} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {redirect} from "./store/middlewares/redirect";
import reviews from './mocks/reviews'; // еще нет в задании api-ссылки для получения отзывов, поэтому моки

const api = createAPI(
    () => store.dispath(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchQffersList()),
  store.dispatch(checkAuth()).then(() => console.log(store.getState()))
])
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
