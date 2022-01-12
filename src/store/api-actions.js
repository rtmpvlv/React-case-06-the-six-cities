import {ActionCreator} from './action';
import {AuthorizationStatus, ApiRequestURLs} from '../constants';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.HOTELS)
    .then(({data}) => dispatch(ActionCreator.offersListLoad(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.LOGIN)
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRequestURLs.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
);
