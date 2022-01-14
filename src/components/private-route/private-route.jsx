import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {PRIVATE_ROUTE_TYPES} from '../types';

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = PRIVATE_ROUTE_TYPES;

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps)(PrivateRoute);
