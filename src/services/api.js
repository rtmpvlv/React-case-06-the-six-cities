import axios from 'axios';

const REQUIEST_URL = `https://6.react.pages.academy/six-cities`;
const REQUIEST_TIMEOUT = 5000;

const HTTPcode = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: REQUIEST_URL,
    timeout: REQUIEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;

    if (response.status === HTTPcode.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw new Error(error);
  };
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
