import { createSlice } from "@reduxjs/toolkit";

let Users = JSON.parse(localStorage.getItem("users-adminpanel-redux"));

const initialState = {
  data: Users ? Users : [],
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUserData(state, action) {
      state.data.push(action.payload);
    },
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { handleUserData, login, logout } = userSlice.actions;

export default userSlice;
