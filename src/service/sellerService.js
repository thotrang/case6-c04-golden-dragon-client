
import {customAxios} from "./tokenHeader";
import { getAllProductSlice } from "../reducer/slice/productSlice";
const baseURL = "http://localhost:3000";

export const getAllProduct = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/admin/products`)
    dispatch(getAllProductSlice(res.data))


}