import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../thunks/todosThunk";

const initialState = {
  todos: [],
  loading: false,
  error: "",
};

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = "";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD TODO

      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
        state.error = "";
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // EDIT TODO

      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
        state.error = "";
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE TODO

      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        state.error = "";
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todosSlice.reducer;
