import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  // clearAuthError,
} from './operations';

export const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [register.rejected]: handleRejected,
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.pending]: handlePending,
    [logIn.rejected]: handleRejected,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.pending]: handlePending,
    [logOut.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = null;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
});
// export const { clearError } = authSlice.actions;

export const authReducer = authSlice.reducer;
