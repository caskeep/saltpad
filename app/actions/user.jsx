import axios from 'axios';
import AuthService from '../services/login';

//Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

// Sign out User
export const SIGN_OUT_USER = 'SIGN_OUT_USER';


export function signInUser(values) {
    const request = AuthService.new_login(values.username, values.password);

    return {
        type: SIGNIN_USER,
        payload: request
    };
}

export function signInUserSuccess(user) {
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: user,
        meta: {
            transition: (prevState, nextState, action) => {
                return {pathname: '/'}
            }
        }
    };
}

export function signInUserFailure(error) {
    return {
        type: SIGNIN_USER_FAILURE,
        payload: error
    };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  };
}
