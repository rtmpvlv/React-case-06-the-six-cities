import {ActionCreator} from './action';
import {AuthorizationStatus, ApiRequestURLs} from '../constants';

export const checkLogin = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.LOGIN)
    .then(({data}) => dispatch(ActionCreator.updateLoginData(data.email)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      throw new Error(`Authorization failed.`);
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRequestURLs.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.updateLoginData(data.email)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      throw new Error(`Authorization failed.`);
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.LOGOUT)
    .then(() => dispatch(ActionCreator.logout()))
);

export const loadOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.HOTELS)
    .then(({data}) => dispatch(ActionCreator.offersListLoad(data)))
);

export const loadComments = (id) => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.COMMENTS + id)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

