import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import NotFound from '../not-found/not-found';
import {AppType} from '../../types/types';

const App = (props) => {
  const {offers, reviews, numberOffer} = props;

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" render={(props) => <MainPage numberOffer={numberOffer} {...props} />}></Route> */}
        <Route exact path="/">
          <MainPage numberOffer={numberOffer} offers={offers}/>
        </Route>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route exact path='/favorites' component={FavoritesPage}></Route>
        <Route exact path='/offer/:id' component={RoomPage}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = AppType;

export default App;
