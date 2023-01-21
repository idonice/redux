import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userName: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.userName = payload.name;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userName = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice;
