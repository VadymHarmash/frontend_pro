import { combineReducers, configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./slices/hotelsSlice";
import themeReducer from "./slices/themeSlice";
import destinationReducer from "./slices/destinationsSlice";

const rootReducer = combineReducers({
  hotelsReducer,
  themeReducer,
  destinationReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
