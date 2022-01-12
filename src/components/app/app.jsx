import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {PageNotFound} from '../404/404';
import Favorites from '../favorites/favorites';
import {Login} from '../login/login';
import Main from '../main/main';
import Property from '../property/property.jsx';
import {REVIEWS_TYPE} from '../types';
import {AppRoute} from '../../constants';

export const App = ({reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Property
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

App.propTypes = REVIEWS_TYPE;
