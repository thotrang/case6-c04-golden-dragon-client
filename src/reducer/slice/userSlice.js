import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllStaffSlice:(state,action) => {
            
        },
        getAllUserSlice: (state, action) => {
            state.users = action.payload
        },
        getDetailUserSlice:(state, action) => {

        },
        addStaffSlice:(state, action) => {
            
        },
        deleteUserSlice:(state, action) => {
            
        },
        updateRoleUserSlice:(state, action) => {
            
        },
        updateUserSlice:(state, action) => {
            
        },
        searchUserSlice:(state, action) => {
            
        },
        searchStaffSlice:(state, action) => {
            
        }
    }
})

export const {
    getAllUserSlice,
    getAllStaffSlice,
    getDetailUserSlice,
    addStaffSlice,
    deleteUserSlice,
    updateRoleUserSlice,
    updateUserSlice,
    searchUserSlice,
    searchStaffSlice
} = userSlice.actions;

export default userSlice.reducer;