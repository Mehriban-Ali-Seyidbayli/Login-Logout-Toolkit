import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null

}

export const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            console.log("setuserdasta", state, action);
            state.userData = action.payload;
        },
        removeUserData: (state) => {
            state.userData = null;
        }

    }
})


export const { setUserData, removeUserData } = userSlice.actions;
export default userSlice.reducer;