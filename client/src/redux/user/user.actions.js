import axios from 'axios';
import Swal from 'sweetalert2';

import {
  SIGNUP_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
  INVALID_SIGNIN,
  INVALID_SIGNUP
} from './user.types';

export const signUp = (values, history) => async dispatch => {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/api/users',
      data: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    });

    dispatch({ type: SIGNUP_USER, payload: response.data });
    history.goBack();
    Swal.fire({
      title: `Welcome,you are signed up :)`,
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Hello'
    });
  } catch (err) {
    dispatch({ type: INVALID_SIGNUP, payload: err.response.data.msg });
  }
};

export const signIn = (values, history) => async dispatch => {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/api/auth',
      data: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    });

    dispatch({ type: SIGNIN_USER, payload: response.data });
    history.goBack();
    const user = response.data.payload.user.firstName;
    Swal.fire({
      title: `Welcome Back ${user}!`,
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Hello'
    });
  } catch (err) {
    if (err.response) {
      dispatch({ type: INVALID_SIGNIN, payload: err.response.data.msg });
    }
  }
};

export const signOut = () => {
  return { type: SIGNOUT_USER };
};
