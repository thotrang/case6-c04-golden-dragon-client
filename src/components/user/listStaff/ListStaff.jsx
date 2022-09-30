import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllStaff,getDetailUser } from "../../../service/userService"
import {Link, useNavigate} from "react-router-dom"

function ListStaff() {
    const navigate = useNavigate()
    const [isList, setIsList] = useState(false)
    const listStaff = useSelector((state) => state.userReducer.users)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllStaff(dispatch)
        setIsList(true)
    }, [])
    const handelDetail = (id) => {
        navigate(`/admin/detail/${id}`)
        getDetailUser(id,dispatch)
    }
    return (
        <div>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Name</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Role</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Email</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Phone</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Gender</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >DoB</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Address</th>
                        <th
                            colSpan={2} className=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"
                        >Action</th>

                    </tr>
                </thead>
                <tbody>
                    {isList && listStaff.map((user, index) => (
                        <tr key={index}>

                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >
                                <img
                                    className="w-full h-full rounded-full"
                                    src={user.avatar}
                                    alt=""
                                />
                                <p  style={{cursor:"pointer"}} onClick={()=>{handelDetail(user._id)}}>{user.name}</p></td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.roleId.name}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.email}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.phone}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.gender}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.dob}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.address}</td>
                            <td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                <button className="absolute px-10  bg-green-200 opacity-50 rounded-full row">Edit</button>
                            </td>
                            <td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                <button className="absolute  px-5 bg-red-200 opacity-50 rounded-full row">Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div >
    )
}
export default ListStaff