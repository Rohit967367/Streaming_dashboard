import { configureStore } from "@reduxjs/toolkit";
import Add from "./Add";
import Get from "./get";
import Link from "./Link";
import user from "./user";

const Store = configureStore({
  reducer: { user: user, link: Link, add: Add, get: Get },
});

export default Store;
