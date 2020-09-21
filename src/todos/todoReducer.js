import { createSlice } from "@reduxjs/toolkit";

let lastId = 3;

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 0, text: "Learn React", isComplete: false },
    { id: 1, text: "Learn Redux", isComplete: false },
    { id: 2, text: "Learn GraphQL", isComplete: false },
  ],
  reducers: {
    addTodo: (state, action) => [
      ...state,
      { id: lastId++, text: action.payload, isComplete: false },
    ],
    removeTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    toggleTodo: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      ),
    editTodo: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      ),
    reorderTodo: (state, action) =>
      ((state) => (
        state.splice(
          action.payload.endIndex,
          0,
          state.splice(action.payload.startIndex, 1)[0]
          // eslint-disable-next-line no-sequences
        ),
        state
      ))([...state]),
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  reorderTodo,
} = todoSlice.actions;

export const selectTodos = (state) => state.todo;

export default todoSlice.reducer;
