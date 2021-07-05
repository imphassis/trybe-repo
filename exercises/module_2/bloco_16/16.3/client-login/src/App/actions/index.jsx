export const SEND_INFO = 'SEND_INFO';
export const REGISTER_USER = 'GET_DATA';

export const sendInfo = (payload) => ({
  type: SEND_INFO,
  payload,
});

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});
