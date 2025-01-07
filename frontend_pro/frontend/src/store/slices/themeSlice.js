import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isThemeLight: JSON.parse(localStorage.getItem("isThemeLight")) ?? true,
};

document.documentElement.setAttribute(
  "data-theme",
  initialState.isThemeLight ? "light" : "dark"
);

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isThemeLight = !state.isThemeLight;
      document.documentElement.setAttribute(
        "data-theme",
        state.isThemeLight ? "light" : "dark"
      );
      localStorage.setItem("isThemeLight", JSON.stringify(state.isThemeLight));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
