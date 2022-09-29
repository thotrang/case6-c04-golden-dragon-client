
import {customAxios} from "./tokenHeader";
import { getAllUserSlice } from "../reducer/slice/userSlice";
const baseURL = "https://localhost:3000/";

export const getAllUser = async (dispatch) => {
    const res = await customAxios.get('http://localhost:3000/user')
    dispatch(getAllUserSlice(res.data))
}