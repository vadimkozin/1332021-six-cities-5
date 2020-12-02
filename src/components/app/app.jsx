import React from 'react';
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {useSelector} from 'react-redux';
import MainPage from '../main-page/main-page';
import FavoritesPageContainer from '../../containers/favorites-page-container/favorites-page-container';
import LoginPage from '../login-page/login-page';
import RoomPageContainer from '../../containers/room-page-conainer/room-page-container';
import NotFound from '../not-found/not-found';
import browserHistory from '../../browser-history';
import SmartRoute from '../smart-route/smart-route';
import {getIsAuth} from '../../store/selectors/user';
import {AppRoute} from '../../const';

const App = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage}/>

        <SmartRoute exact path={AppRoute.LOGIN} redirectTo={isAuth && AppRoute.ROOT}
          render={() => (<LoginPage />)}
        />

        <Route exact path={AppRoute.FAVORITES} component={FavoritesPageContainer}/>

        <Route exact path={AppRoute.OFFER_ID}
          render={({match}) => (<RoomPageContainer key={match.params.id} offerId={Number(match.params.id)}/>)}
        />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
