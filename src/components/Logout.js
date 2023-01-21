import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userSlice";

const Logout = () => {
  //for use the state
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userName = useSelector((state) => state.userName);
  // for change the states
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout(isLoggedIn));
  };

  return (
    <div>
      <div>hello {userName}, You are logged in</div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Logout;
