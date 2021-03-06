import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {css} from "@emotion/react";
import {SyncLoader} from "react-spinners";
import {PageNotFound} from "../404/404";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Main from "../main/main";
import Property from "../property/property";
import PrivateRoute from "../private-route/private-route";
import {fetchOffersList} from "../../store/api-actions";
import {REVIEWS_TYPE} from "../types";
import {AppRoute} from "../../constants";

const override = css`
  margin: auto;
`;

export const App = (props) => {
  const {reviews, onLoadData, isDataLoaded} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <div
        style={{
          minHeight: `640px`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <SyncLoader color="#4481c3" css={override} />;
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN} render={() => <Main />} />
        <Route exact path={AppRoute.LOGIN} render={() => <Login />} />
        <Route exact path={AppRoute.FAVORITES} render={() => <Favorites />} />
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

const mapStateToProps = (state) => {
  return {
    isDataLoaded: state.isDataLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData() {
      dispatch(fetchOffersList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
