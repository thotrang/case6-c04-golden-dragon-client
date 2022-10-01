import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListStaff from "./components/user/listStaff/ListStaff";
import ListUser from "./components/user/listUser/ListUser";
import UserDetail from "./components/user/userDetail/UserDetail";
import Admin from "./pages/admin/Admin";
import ListProduct from "./components/product/listProduct";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login"></Route>
        <Route path="/register"></Route>
        <Route path="/home"></Route>
        <Route path="/"></Route>
        <Route path="/admin" element={<Admin></Admin>}>
            <Route path = "listUser" element = {<ListUser></ListUser>}></Route>
            <Route path = "listStaff" element = {<ListStaff></ListStaff>}></Route>
            <Route path = "detail/:id" element = {<UserDetail></UserDetail>}></Route>
        </Route>
        <Route path="/accountant"></Route>
        <Route path="/seller/product" element={<ListProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
