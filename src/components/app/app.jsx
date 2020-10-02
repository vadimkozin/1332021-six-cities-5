import React from 'react';
import PropTypes from 'prop-types';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import NotFound from '../not-found/not-found';

const App = ({numberRentalOffer}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <MainPage numberRentalOffer={numberRentalOffer} {...props} />}></Route>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route exact path='/favorites' component={FavoritesPage}></Route>
        <Route exact path='/offer/:id' component={RoomPage}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  numberRentalOffer: PropTypes.number.isRequired,
};

export default App;
