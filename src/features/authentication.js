import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers:{
        userLoggedIn(state, action) {
            return action.payload
        }
    }
})

export const { userLoggedIn } = authenticationSlice.actions

export default authenticationSlice.reducer