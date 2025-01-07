import { createSlice } from "@reduxjs/toolkit";
import { fetchDestinations } from "../thunks/destinationThunk";

const initialState = {
  destinations: [],
  error: "",
};

export const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.error = "";
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.destinations = action.payload;
        state.error = "";
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.error = action.payload;
      })
  }});

export default destinationsSlice.reducer;
