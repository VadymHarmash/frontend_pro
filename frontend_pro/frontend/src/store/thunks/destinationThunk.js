import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "./axiosInstance";

export const fetchDestinations = createAsyncThunk(
  "destinations/fetchDestinations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await $axios.get(
        process.env.REACT_APP_URL_GET_DESTINATION,
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
