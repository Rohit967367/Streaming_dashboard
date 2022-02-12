import { createSlice } from "@reduxjs/toolkit";

const Add = createSlice({
  name: "add",
  initialState: {
    openDial: false,
    openNote: false,
    updateButton: true,
  },
  reducers: {
    OpenDailog(state, action) {
      state.openDial = !state.openDial;
    },
    OpenNote(state) {
      state.openNote = !state.openNote;
    },
    UpdateButtonTrue(state) {
      state.updateButton = true;
    },
    UpdateButtonFalse(state) {
      state.updateButton = false;
    },
  },
});

export const { OpenDailog, OpenNote, UpdateButtonTrue, UpdateButtonFalse } =
  Add.actions;

export default Add.reducer;
