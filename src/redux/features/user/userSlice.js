import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    similarUsers: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SET_SIMILAR_USERS(state, action) {
            state.similarUsers = action.payload
        }
    }
});

export const { SET_SIMILAR_USERS } = userSlice.actions

export default userSlice.reducer