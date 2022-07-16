import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {PageNotFound} from "../404/404";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Main from "../main/main";
import Property from "../property/property";
import PrivateRoute from "../private-route/private-route";
import {REVIEWS_TYPE} from "../types";
import {AppRoute} from "../../constants";

export const App = ({reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN} render={() => <Main />} />
        <Route exact path={AppRoute.LOGIN} render={() => <Login />} />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites />}
        />
        <Route
          exact
          path={AppRoute.ROOM}
          render={() => <Property reviews={reviews} />}
        />
        <Route render={() => <PageNotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = REVIEWS_TYPE;
