import React, {useState} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {PageNotFound} from '../404/404';
import {Favorites} from '../favorites/favorites';
import {Login} from '../login/login';
import {Main} from '../main/main';
import {Property} from '../property/property.jsx';
import {OFFERS_TYPES} from '../types';
import {AppRoute} from '../../constants';

export const App = (props) => {
  const {offers} = props;
  const [hoveredElement, setHoveredElement] = useState(null);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            offers = {offers}
            onMouseHover = {setHoveredElement}
            hoveredElement={hoveredElement}
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
          <Property
            offers = {offers}
            onMouseHover = {setHoveredElement}
            hoveredElement={hoveredElement}
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
