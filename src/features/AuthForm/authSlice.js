import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// --- login API call
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ( {email, password}, thunkAPI ) => {
        try {
            const res = await axios.post("https://apis.ccbp.in/login", {
                email,
                password,
            });

            return res.data;  // {"username": "adsas", "password": "ddasd"}
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response?.data || "Login Failed");
        }
    }
);

// ---- initial auth state
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null, 
};

// ---- Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {   // methods to use on state
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
        login: (state, action) => {
            const { email, password } = action.payload;
            console.log("email:", email);
            console.log("password:",password);
            state.user = "User Sample";
            state.token = "adsmakfnbeuvlanlin25avdv52av6dva6v";
        }
    },

    extraReducers: ( builder ) => { // api call for authentication (loading => pending, success => fullfilled, failed => rejected)
        builder
            .addCase(loginUser.pending, (state) => {  // Login pending
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => { // Login success
                state.loading = false;
                const {token, user} = action.payload;

                state.token = token;
                state.user = user;

                localStorage.setItem("token", token);
                localStorage.setItem("useer", JSON.stringify(user));
            })
            .addCase(loginUser.rejected, (state, action) => { // Lofin Failed
                state.loading = false;
                state.error = action.payload || "Invalid credentials";
            })
    },
});


export const {logout, login} = authSlice.actions;  // action functions for state manipulation
export default authSlice.reducer;   // reducer for store


