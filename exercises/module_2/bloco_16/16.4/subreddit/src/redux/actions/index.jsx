import fetch from 'node-fetch';
export const REQUEST_DATA = 'REQUEST_DATA';
export const GET_DATA = 'GET_DATA';
export const DATA_FAILURE = 'DATA_FAILURE';

export const requestData = () => ({
  type: REQUEST_DATA,
});

const getData = (payload) => ({ type: GET_DATA, payload });

const dataFailure = (error) => ({ type: DATA_FAILURE, error });

export const fetchThread = (thread) => {
  const URL = (data) => `https://www.reddit.com/r/${data}.json`;
  return async (dispatch) => {
    requestData(thread);
    try {
      const r = await fetch(URL(thread));
      const rJson = await r.json();
      await dispatch(getData(rJson.data.children));
    } catch (error) {
      return dispatch(dataFailure(error));
    }
  };
};
