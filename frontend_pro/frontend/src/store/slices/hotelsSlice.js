import { createSlice } from "@reduxjs/toolkit";
import {
  fetchHotels,
  fetchHotelsByCity,
  findHotel,
} from "../thunks/hotelsThunk";

const initialState = {
  hotels: [],
  hotelToShow: {},
  loading: false,
  error: "",
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    clearHotels: (state) => {
      state.hotels = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
        state.error = "";
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchHotelsByCity.pending, (state, action) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchHotelsByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
        state.error = "";
      })
      .addCase(fetchHotelsByCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(findHotel.pending, (state) => {
        state.error = "";
      })
      .addCase(findHotel.fulfilled, (state, action) => {
        state.hotelToShow = action.payload;
        state.error = "";
      })
      .addCase(findHotel.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearHotels } = hotelsSlice.actions;
export default hotelsSlice.reducer;
