export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export default function reducer(state = {
  login: {},
}, action) {
  switch (action.type) {

    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, login: action.payload.data };
    case LOGIN_FAIL:
      return { ...state, loading: false, login: action.error.response.data };

    default:
      return state;
  }
}

export function login(data) {
  return {
    type: LOGIN,
    payload: {
      request: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        url: `/user_login`,
        credentials: 'include',
        data: data
      }
    }
  };
}