import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {PageNotFound} from '../404/404';
import {Favorites} from '../favorites/favorites';
import {Login} from '../login/login';
import {Main} from '../main/main';
import {Property} from '../property/property.jsx';
import {APP_TYPES} from '../types';
import {AppRoute} from '../../constants';

export const App = (props) => {
  const {placesCount} = props;
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            placesCount = {placesCount}
            offers = {offers}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites
            offers = {offers}
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Property />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = APP_TYPES;
