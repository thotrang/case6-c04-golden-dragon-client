import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
}
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        getAllUserSlice: (state,action) =>{
            state.users = action.payload
        }
    }
})

export const {getAllUserSlice} = userSlice.actions;
export default userSlice.reducer;