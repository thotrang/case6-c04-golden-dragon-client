import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListUser from "./components/user/listUser/ListUser";
import UserDetail from "./components/user/userDetail/UserDetail";
import Admin from "./pages/admin/Admin";
import AddStaff from "./components/user/addStaff/AddStaff";
import { getAllUser, getAllStaff } from "./service/userService"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllStaff(dispatch)
    getAllUser(dispatch)
  }, [])

  const listUser = useSelector((state) => state.userReducer.users)
  const listStaff = useSelector((state) => state.userReducer.staffs)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login"></Route>
        <Route path="/register"></Route>
        <Route path="/home"></Route>
        <Route path="/"></Route>
        <Route path="/admin" element={<Admin users = {listUser}></Admin>}>
          <Route path="listUser" element={<ListUser users = {listUser}></ListUser>}></Route>
          <Route path="listStaff" element={<ListUser users = {listStaff}></ListUser>}></Route>
          <Route path="detail/:id" element={<UserDetail></UserDetail>}></Route>
          <Route path="myProfile" element={<UserDetail></UserDetail>}></Route>
          <Route path="addStaff" element={<AddStaff></AddStaff>}></Route>
        </Route>
        <Route path="/accountant"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
