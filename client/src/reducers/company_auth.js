import {
    REGISTER_SUCCESS,
    //REGISTER_FAIL,
    COMPANY_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    //LOGIN_FAIL,
    COMPANY_LOGOUT,
    ACCOUNT_DELETED
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    company: null
  };
  
  function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case COMPANY_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          company: payload
        };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
      case ACCOUNT_DELETED:
      case AUTH_ERROR:
      case COMPANY_LOGOUT:
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          company: null
        };
      default:
        return state;
    }
  }
  
  export default authReducer;
  