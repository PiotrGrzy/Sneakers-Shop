import {
  SIGNUP_USER,
  SIGNIN_USER,
  GET_USER_DATA,
  SIGNOUT_USER,
  INVALID_SIGNIN,
  INVALID_SIGNUP
} from './user.types';

const INITIAL_STATE = {
  user: null,
  token: null,
  isLoggedIn: false,
  errors: { signin: null, signup: null }
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_USER:
    case SIGNUP_USER:
      const {
        token,
        payload: { user }
      } = action.payload;
      return {
        user,
        token,
        isLoggedIn: true,
        errors: {
          signin: null,
          signup: null
        }
      };
    case INVALID_SIGNIN:
      return {
        ...state,
        isLoggedIn: false,
        errors: { signin: action.payload }
      };
    case INVALID_SIGNUP:
      return {
        ...state,
        isLoggedIn: false,
        errors: { signup: action.payload }
      };
    case SIGNOUT_USER:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default userReducer;
