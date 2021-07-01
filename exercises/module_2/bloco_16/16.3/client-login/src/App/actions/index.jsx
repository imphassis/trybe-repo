export const SEND_INFO = 'SEND_INFO';
export const GET_DATA = 'GET_DATA';

export const sendInfo = (payload) => ({
  type: SEND_INFO,
  payload,
});

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
