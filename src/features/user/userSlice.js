import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    profilePic: ''
}

export const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        userUpdate: (state, action) => {
            const { name, profilePic } = action.payload; 
            state.name = name;
            state.profilePic = profilePic;
        },
        clearUser: (state) => {
            state.name = '';
            state.profilePic = '';
        }
    } 
});

export const { userUpdate, clearUser } = userSlice.actions;
export const selectUser = (state)=> state.user
export default userSlice.reducer