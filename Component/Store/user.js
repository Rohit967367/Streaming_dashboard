import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "",
    image: "",
  },
  reducers: {
    getUser(state, action) {
      (state.email = action.payload.email),
        (state.name = action.payload.name),
        (state.image = action.payload.image);
    },
    removeUser(state) {
      (state.email = ""), (state.name = ""), (state.image = "");
    },
  },
});

export const { getUser, removeUser } = User.actions;

export default User.reducer;
