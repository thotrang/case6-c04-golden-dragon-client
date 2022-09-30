import {  Link, Outlet } from "react-router-dom";
function Admin() {
    return (
        <div>
            <div>
                <Link to="listUser">List User</Link>
                <Link to="listStaff">List Staff</Link>
            </div>
            <div >
                <Outlet />
            </div>
        </div>
    )
}
export default Admin;