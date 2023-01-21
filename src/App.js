import "./App.css";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return <div className="App">{isLoggedIn ? <Logout /> : <LoginForm />}</div>;
}

export default App;
