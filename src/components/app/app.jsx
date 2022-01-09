import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {PageNotFound} from '../404/404';
import {Favorites} from '../favorites/favorites';
import {Login} from '../login/login';
import {MainWrapped} from '../main/main';
import {PropertyWrapped} from '../property/property.jsx';
import {OFFERS_TYPES} from '../types';
import {AppRoute} from '../../constants';

export const App = ({offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainWrapped/>
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
          <PropertyWrapped
            offers = {offers}
            reviews={reviews}
          />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = OFFERS_TYPES;
