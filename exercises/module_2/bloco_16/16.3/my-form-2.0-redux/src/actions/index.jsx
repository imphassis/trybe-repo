export const SEND_DATA = 'SEND_DATA';

export const sendForm = (payload) => ({
  type: SEND_DATA,
  payload,
});
