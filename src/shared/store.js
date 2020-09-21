import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "../filters/filterReducer";
import todoReducer from "../todos/todoReducer";

export default configureStore({
  reducer: {
    filter: filterReducer,
    todo: todoReducer,
  },
});
