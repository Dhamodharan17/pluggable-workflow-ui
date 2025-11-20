import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: localStorage.getItem("app-theme") || "light",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            localStorage.setItem("app-theme", state.mode);
        },
        setTheme: (state, action) => {
            state.mode = action.payload;
            localStorage.setItem("app-theme", state.mode);
        },
    },
});

export const { toggleTheme, setTheme} = themeSlice.actions;

export default themeSlice.reducer;
