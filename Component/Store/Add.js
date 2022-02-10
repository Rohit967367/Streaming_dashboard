import { createSlice } from "@reduxjs/toolkit";

const Add = createSlice({
  name: "add",
  initialState: {
    openDial: false,
    openNote: false,
  },
  reducers: {
    OpenDailog(state, action) {
      state.openDial = !state.openDial;
    },
    OpenNote(state) {
      state.openNote = !state.openNote;
    },
  },
});

export const { OpenDailog, OpenNote } = Add.actions;

export default Add.reducer;
