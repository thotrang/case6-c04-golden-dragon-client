import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from './service/userService'
function App() {
  const listUser = useSelector(state => state.userReducer.users)
  console.log(listUser);
  const dispatch = useDispatch()
  const handelClick = () => {
    getAllUser(dispatch)
  }
  return (
    <div>
      <button onClick={handelClick}>Click</button>
      {listUser && <div>
        {listUser.map((user)=>(
          <li>{user.name}</li>
        ))}
      </div>}

    </div>
  );
}

export default App;
