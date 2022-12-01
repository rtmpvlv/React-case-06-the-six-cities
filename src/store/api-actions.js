import {ActionCreator} from "./action";
import {AuthorizationStatus, ApiRequestURLs} from "../constants";

export const checkLogin = () => (dispatch, _getState, api) =>
  api
    .get(ApiRequestURLs.LOGIN)
    .then(({data}) => dispatch(ActionCreator.updateUserData(data)))
    .then(() =>
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH))
    )
    .catch(() => {
      throw new Error(`Authorization failed.`);
    });

export const login =
  ({email, password}) =>
    (dispatch, _getState, api) =>
      api
      .post(ApiRequestURLs.LOGIN, {email, password})
      .then(({data}) => dispatch(ActionCreator.updateUserData(data)))
      .then(() =>
        dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH))
      )
      .catch(() => {
        throw new Error(`Authorization failed.`);
      });

export const logout = () => (dispatch, _getState, api) =>
  api.get(ApiRequestURLs.LOGOUT).then(() => dispatch(ActionCreator.logout()));

export const fetchOffers = () => (dispatch, _getState, api) =>
  api
    .get(ApiRequestURLs.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffersList(data)));

export const fetchOffer = (id) => (dispatch, _getState, api) =>
  api
    .get(ApiRequestURLs.HOTELS + id)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)));

export const fetchComments = (id) => (dispatch, _getState, api) =>
  api
    .get(ApiRequestURLs.COMMENTS + id)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)));
