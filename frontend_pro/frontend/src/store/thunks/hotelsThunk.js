import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "./axiosInstance";

export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async (_, { rejectWithValue }) => {
    try {
      const response = await $axios.get(process.env.REACT_APP_URL_GET_HOTELS);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const fetchHotelsByCity = createAsyncThunk(
  "hotels/fetchHotelsByCity",
  async (city, { rejectWithValue }) => {
    try {
      const response = await $axios.post(
        process.env.REACT_APP_URL_POST_HOTELS,
        { city },
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const findHotel = createAsyncThunk(
  "hotels/findHotel",
  async (id, { rejectWithValue }) => {
    try {
      const response = await $axios.get(
        `${process.env.REACT_APP_URL_GET_HOTELS}/${id}`,
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
