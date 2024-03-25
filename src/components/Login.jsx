import { useState } from "react";
import { IoEyeSharp as ShowPassword } from "react-icons/io5";
import { FaEyeSlash as HidePassword } from "react-icons/fa6";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({
      email: "",
      password: ""
    });
    const [passwordInputType, setPasswordInputType] = useState("password");
  
    console.log(user);
  
    function changePasswordInputType() {
      if (passwordInputType === "text") {
        setPasswordInputType("password");
      } else {
        setPasswordInputType("text");
      }
    }
  
    return (
        <div className="flex justify-center items-center">
        <div
          className="w-2/6 flex flex-col justify-center items-center mt-5 space-y-3 py-5 px-6 rounded-lg"
          style={{ boxShadow: "14px 5px 70px 6px rgba(0,0,0,0.1)" }}>
          <h1 className="text-2xl">Login</h1>
          <hr className="h-1 w-32 bg-dark-green" />
          <div className="w-full">
            <input
              type="email"
              value={email}
              placeholder="example@test.com"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-dark-green"
              onChange={event => {
                setEmail(event.target.value);
                setUser(prevState => {
                  return {
                    ...prevState,
                    email: event.target.value
                  };
                });
              }}
            />
          </div>
          {/* password div */}
          <div className="w-full flex relative">
            <input
              type={passwordInputType}
              value={password}
              placeholder="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-dark-green"
              onChange={event => {
                setPassword(event.target.value);
                setUser(prevState => {
                  return {
                    ...prevState,
                    password: event.target.value
                  };
                });
              }}
            />
            <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordInputType}>
              {passwordInputType === "text" ? <HidePassword /> : <ShowPassword />}
            </span>
          </div>
          <div className="w-full">
            <button className="w-full text-white bg-dark-green py-2 px-4 rounded">Login</button>
          </div>
        </div>
      </div>
    );
  }


  export default Login;
  