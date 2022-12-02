import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, fetchCurrentUser } from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshingUser: false,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signup.pending](state) {
             state.isLoggedIn = false;
        },
        [signup.fulfilled](state, action){
            state.user = action.payload.data.user;
            state.token = action.payload.data.token;
            state.isLoggedIn = true;
        },
        [signup.rejected](state, action) {
            state.isLoggedIn = false;
            state.error = action.payload;
        },
        [login.pending](state) {
             state.isLoggedIn = false;
        },
        [login.fulfilled](state, action){
            state.user = action.payload.data.user;
            state.token = action.payload.data.token;
            state.isLoggedIn = true;
        },
        [login.rejected](state, action) {
            state.isLoggedIn = false;
            state.error = action.payload;
        },
        [logout.pending](state) {
             state.isLoggedIn = true;
        },
        [logout.fulfilled](state){
            state.user = { name: null, email: null };
            state.token = '';
            state.isLoggedIn = false;
        },
        [logout.rejected](state, action) {
            state.isLoggedIn = true;
            state.error = action.payload;
        },
        [fetchCurrentUser.pending](state) {
            state.isLoggedIn = false;
            state.isRefreshingUser = true;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user =  action.payload.data.user;
            state.isLoggedIn = true;
            state.isRefreshingUser = false;
        },
        [fetchCurrentUser.rejected](state, action) {
            state.isLoggedIn = false;
            state.error = action.payload;
            state.isRefreshingUser = false;
        },
    },

})