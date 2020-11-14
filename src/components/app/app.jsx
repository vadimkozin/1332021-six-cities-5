import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import NotFound from '../not-found/not-found';
import {APP_TYPE} from '../../types/types';

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/favorites'>
          <FavoritesPage
            offers={offers}
          />
        </Route>
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
  offers: state.DATA.offers,
});


export {App};
export default connect(mapStateToProps)(App);
