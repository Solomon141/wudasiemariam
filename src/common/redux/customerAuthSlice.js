import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: true,
  userName: null,
  otpsent: false,
  otpapproved: false,
  data: {},
};

const customerSlice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    custRegister: (state, action) => {
      console.log('object dispatched')
      return {
        ...state,
        isAuthenticated: true,
        userName: action.payload.responseData.userName,
        otpsent: true,
        data: action.payload.responseData,
        otpapproved: false,
      };
    },

    custLoginDirect: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        userName: action.payload.responseData.userName,
        otpsent: true, 
        otpapproved: true,
        data: action.payload.responseData,
      };
    },

    custLogin: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        userName: action.payload.responseData.userName,
        data: action.payload.responseData,
      };
    },

    loginwithPin: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        otpapproved: true,
        userName: action.payload.responseData.userName,
        data: action.payload.responseData,
      }
    },

    custLogout: (state, action) => {
      return { ...state, data: {}, isAuthenticated: false };
    },

    custChangeUser: (state, action) => {
      return {  ...state, isAuthenticated: false, userName: null, otpsent: false, otpapproved: false };
    },

    otpapprovedUpdate: (state, action) => {
      return { ...state, isAuthenticated: false, userName: null, otpapproved: true };
    },

  },
});

export const { custLogin, custLogout, custChangeUser, custRegister, custLoginDirect, loginwithPin, otpapprovedUpdate } = customerSlice.actions;

export default customerSlice.reducer;
