import { createSlice } from "@reduxjs/toolkit";

export const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: visibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = filterSlice.actions;

export const selectFilter = (state) => state.filter;

export const selectFilteredTodos = (state) =>
  state.todo.filter((todo) =>
    state.filter === visibilityFilters.SHOW_ALL
      ? true
      : state.filter === visibilityFilters.SHOW_ACTIVE
      ? !todo.isComplete
      : todo.isComplete
  );

export default filterSlice.reducer;
