import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {PageNotFound} from "../404/404";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Main from "../main/main";
import Property from "../property/property";
import PrivateRoute from "../private-route/private-route";
import {fetchOffers} from "../../store/api-actions";
import {Spinner} from "../spinner/spinner";
import {AppRoute} from "../../constants";

export const App = (props) => {
  const {onLoadData, isDataLoaded} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return <Spinner />;
  }

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
        <Route exact path={AppRoute.ROOM_DOMAIN} render={() => <Property />} />
        <Route render={() => <PageNotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isDataLoaded: state.isDataLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData() {
      dispatch(fetchOffers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
