import { Link, useLocation, useNavigate } from "react-router-dom";
import {  useContext, useState } from "react"; 

import { FaEnvelope, FaEye, FaEyeSlash, FaKey } from "react-icons/fa"; 
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {  
  const { loginUser } = useContext(AuthContext);

  const [isShown, setIsShown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handlePasswordShow = (e) => {
    e.preventDefault();
    setIsShown(!isShown);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //login user
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Congrats!!",
          text: `You successfully Logged in`,
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      });
  };

  return (
    <div>
      <div className="shape-bg bg-fixed relative py-14 md:py-24 lg:py-28">
    <div className="absolute left-0 top-0 w-full h-full bg-[#312d3f] dark:opacity-90 opacity-0"></div>
        <div className="dark:bg-[#08041f] relative z-20 bg-white  max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-20">
          <h2 className="text-4xl dark:text-white  text-[#08041f] mb-9 font-semibold">
            Login Now
          </h2>
          <form
          onSubmit={handleLogin}
            className="flex flex-col text-[#08041f] gap-3" 
          >
            <div className="flex relative items-center mb-3 rounded-md  ">
              <label
                className="p-3 absolute rounded-md dark:text-white  "
                htmlFor="email"
              >
                <FaEnvelope></FaEnvelope>
              </label>
              <input
                className="w-full rounded-full  pl-12 py-2 bg-[#8173cf] dark:placeholder:text-[#fff] placeholder:text-[#08041f] dark:text-white text-[#08041f]  border-none"
                type="email"
                name="email"
                placeholder="Email*"
                id="email"
                required
              />
            </div>
            <div className="flex relative items-center mb-3 rounded-md  ">
              <label
                className="p-3 absolute rounded-md dark:text-white  "
                htmlFor="password"
              >
                <FaKey></FaKey>
              </label>
              <input
                className="w-full rounded-full  pl-12 py-2 bg-[#8173cf] dark:placeholder:text-[#fff] placeholder:text-[#08041f] dark:text-white text-[#08041f]  border-none"
                type={isShown ? "text" : "password"}
                name="password"
                placeholder="Password*"
                id="password"
                required
              />
              <button
                onClick={handlePasswordShow}
                className="absolute  dark:text-white right-3 bottom-3"
              >
                {isShown ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>
            <div className="mt-3">
              <input
                className="btn rounded-full  border-none bg-[#08041f] dark:bg-white dark:text-[#08041f] dark:hover:bg-theme-yellow hover:bg-theme-yellow hover:text-[#fff]  text-white text-xl px-8"
                type="submit"
                value="Login"
              />
            </div>
          </form>

          <div className="relative text-center before:w-full before:h-[2px] before:bg-[#08041f] dark:before:bg-white  before:absolute before:left-0 mt-20 mb-4">
            <h2 className="text-xl dark:text-white  bg-white text-[#08041f] font-semibold dark:bg-[#08041f] inline-block relative -top-3  px-4 ">
              You can also login with
            </h2>
            <SocialLogin></SocialLogin>
          </div>
        </div>
        <div className="mt-8 dark:bg-[#08041f]  relative z-20 bg-white  max-w-3xl mx-auto md:px-12 px-6 py-6 md:py-14 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-semibold dark:text-white  text-[#08041f] ">
            New Customer?
          </h2>
          <Link to="/register">
            <button className="btn rounded-full  border-none bg-[#08041f] dark:bg-white dark:text-[#08041f] dark:hover:bg-theme-yellow hover:bg-theme-yellow hover:text-[#ddd]  text-white text-xl px-8">Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
