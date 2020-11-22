import React from 'react';
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {useSelector} from 'react-redux';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
// import RoomPageContainer from '../../containers/room-page-conainer/room-page-container';

import NotFound from '../not-found/not-found';
import {APP_TYPE} from '../../types/types';
import {getOffers} from '@selectors/offers';
import browserHistory from '../../browser-history';

import SmartRoute from '../smart-route/smart-route';
import {getAuthorizationStatus} from '@selectors/user';
import {AuthorizationStatus, AppRoute} from "@const";

const App = (props) => {
  const {reviews} = props;
  const offers = useSelector(getOffers);
  const isAuth = useSelector(getAuthorizationStatus) === AuthorizationStatus.AUTH;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage}/>

        <SmartRoute exact path={AppRoute.LOGIN} isRedirect={isAuth} redirectTo={AppRoute.ROOT}
          render={() => (<LoginPage />)}
        />

        <SmartRoute exact path={AppRoute.FAVORITES} isRedirect={!isAuth} redirectTo={AppRoute.LOGIN}
          render={() => (<FavoritesPage offers={offers}/>)}
        />

        <Route exact path={AppRoute.OFFER_ID}
          render={({match}) => (
            <RoomPage
              offerId={match.params.id}
              offers={offers}
              reviews={reviews}
            />
          )}
        />

        {/* <Route exact path={AppRoute.OFFER_ID}
          render={({match}) => (
            <RoomPageContainer
              offerId={match.params.id}
              offers={offers}
              reviews={reviews}
            />
          )}
        /> */}

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = APP_TYPE;

export default App;
