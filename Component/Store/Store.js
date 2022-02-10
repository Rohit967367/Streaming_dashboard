import { configureStore } from "@reduxjs/toolkit";
import Add from "./Add";
import Link from "./Link";
import user from "./user";

const Store = configureStore({
  reducer: { user: user, link: Link, add: Add },
});

export default Store;
