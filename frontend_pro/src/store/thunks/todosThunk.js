import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      return await response.json();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (newTodo, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to add todos");
      }
      return await response.json();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (updatedTodo, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTodo),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to update todos");
      }
      return await response.json();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (todoId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) {
        throw new Error("Failed to delete todos");
      }
      return todoId;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
