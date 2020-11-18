import React from 'react';
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import NotFound from '../not-found/not-found';
import {APP_TYPE} from '../../types/types';
import {getOffers} from '@selectors/offers';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path='/login' component={LoginPage} />

        <PrivateRoute exact path='/favorites'
          render={() => (<FavoritesPage offers={offers}/>)}
        />

        {/* <Route exact path='/favorites'>
          <FavoritesPage offers={offers}/>
        </Route> */}

        <Route exact path='/offer/:id'
          render={({match}) => (
            <RoomPage
              offerId={match.params.id}
              offers={offers}
              reviews={reviews}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = APP_TYPE;

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});


export {App};
export default connect(mapStateToProps)(App);
