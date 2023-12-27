import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5"; 
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const {googleLogin,githubLogin}=useContext(AuthContext)

   const handleGoogleLogin = () => {
      googleLogin()
        .then(() => {
          Swal.fire({
            title: "Congrats!!",
            text: `You successfully Logged in`,
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate(location?.state ? location.state : "/");
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
    const handleGithubLogin = () => {
      githubLogin()
        .then(() => {
          Swal.fire({
            title: "Congrats!!",
            text: `You successfully Logged in`,
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate(location?.state ? location.state : "/");
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
      <div className="flex justify-center gap-3">
         <button className="text-3xl  rounded-full w-[50px] h-[50px] flex justify-center items-center bg-[#662e8d6c] dark:bg-theme-dark-top dark:hover:bg-[#662e8d6c] hover:bg-theme-dark-top" onClick={handleGoogleLogin}>
         <FcGoogle />
         </button>
         <button className="text-3xl  rounded-full w-[50px] h-[50px] flex justify-center items-center dark:bg-theme-dark-top bg-[#662e8d6c] hover:bg-theme-dark-top hover:text-white text-[#fff] dark:text-white dark:hover:bg-[#662e8d6c]" onClick={handleGithubLogin}>
         <IoLogoGithub />
         </button>
      </div>
   );
};

export default SocialLogin;