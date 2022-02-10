import { createSlice } from "@reduxjs/toolkit";

const Link = createSlice({
  name: "link",
  initialState: {
    streamLink: "",
    streamKey: "",
    streamURL: "",
  },
  reducers: {
    getStream(state, action) {
      (state.streamKey = action.payload.streamKey),
        (state.streamLink = action.payload.streamLink);
      state.streamURL = action.payload.streamURL;
    },
    removeStream(state) {
      (state.streamKey = ""), (state.streamLink = ""), (state.streamURL = "");
    },
  },
});

export const { getStream, removeStream } = Link.actions;

export default Link.reducer;
