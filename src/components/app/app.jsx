import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PageNotFound from '../404/404';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import Property from '../property/property.jsx';
import {PLACES_COUNT_TYPES} from '../types';
import {AppRoute} from '../../constants';

const App = (props) => {
  const {placesCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            placesCount = {placesCount}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
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

App.propTypes = PLACES_COUNT_TYPES;

export default App;
