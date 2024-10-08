import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    // registerSuccess : (state,action) => {

    // },
    registerSuccess : (state,{payload}) => {
      //  console.log(payload) 
      state.loading = false;
      state.currentUser = payload.data.username;
      state.token = payload.data.token;
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess,
} = authSlice.actions;
export default authSlice.reducer;
