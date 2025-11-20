import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthForm/authSlice";
import themeReducer from "../features/ThemeToggler/themeSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
    }
});

export default store;
