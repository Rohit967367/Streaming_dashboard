import { createSlice } from "@reduxjs/toolkit";

const Get = createSlice({
  name: "getData",
  initialState: {
    name: "",
    id: "",
    link: "",
    timestamp: "",
    email: "",
  },
  reducers: {
    getData(state, action) {
      (state.id = action.payload.id),
        (state.email = action.payload.email),
        (state.link = action.payload.link),
        (state.name = action.payload.name),
        (state.timestamp = action.payload.timestamp);
    },
    removeData(state) {
      (state.email = ""),
        (state.id = ""),
        (state.link = ""),
        (state.name = ""),
        (state.timestamp = "");
    },
  },
});

export const { getData, removeData } = Get.actions;

export default Get.reducer;
