import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoggedIn: false,
    authLoading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_USER(state, action) {
            state.user = action.payload
        },
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload
        },
        SET_AUTH_LOADING(state, action) {
            state.authLoading = action.payload
        }
    }
});

export const { SET_USER, SET_LOGIN, SET_AUTH_LOADING } = authSlice.actions

export default authSlice.reducer