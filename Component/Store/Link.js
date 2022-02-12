import { createSlice } from "@reduxjs/toolkit";

const Link = createSlice({
  name: "link",
  initialState: {
    streamLink: "",
    streamKey: "",
    streamURL: "",
    userSend: [],
  },
  reducers: {
    getStream(state, action) {
      (state.streamKey = action.payload.streamKey),
        (state.streamLink = action.payload.streamLink),
        (state.streamURL = action.payload.streamURL);
    },

    collectData(state, action) {
      state.userSend = action.payload;
    },
    removeSend(state) {
      state.userSend = [];
    },
    removeStream(state) {
      (state.streamKey = ""), (state.streamLink = ""), (state.streamURL = "");
    },
  },
});

export const { getStream, removeStream, getSend, removeSend, collectData } =
  Link.actions;

export default Link.reducer;
