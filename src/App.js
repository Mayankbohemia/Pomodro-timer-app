import "./App.css";
import { useState } from "react";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import AuthDetails from "./components/auth/AuthDetails";
import Timer from "./components/timer/timer";

function App() {
  const [login, setlogin] = useState(true);

  const setLoginFalse = () => {
    setlogin(false)
  }
  const setLoginTrue = () => {
    setlogin(true)
  }

  return (
    <div className="App">
      <AuthDetails onLoginTrue={setLoginTrue} onLoginFalse={setLoginFalse} ></AuthDetails>
      {login && <Signup></Signup>}
      {login && <Signin></Signin>}
     {!login && <Timer></Timer>}
    </div>
  );
}

export default App;
