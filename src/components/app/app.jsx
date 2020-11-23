import React from 'react';
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {useSelector} from 'react-redux';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPageContainer from '../../containers/room-page-conainer/room-page-container';
import NotFound from '../not-found/not-found';
import {getOffers} from '@selectors/offers';
import browserHistory from '../../browser-history';
import SmartRoute from '../smart-route/smart-route';
import {getIsAuth} from '@selectors/user';
import {AppRoute} from "@const";

const App = () => {
  const offers = useSelector(getOffers);
  const isAuth = useSelector(getIsAuth);

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
          render={({match}) => (<RoomPageContainer key={match.params.id} offerId={match.params.id}/>)}
        />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
