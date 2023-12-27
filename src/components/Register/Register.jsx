import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 

import { FaCamera, FaEnvelope, FaEye, FaEyeSlash, FaKey,FaUser } from "react-icons/fa"; 
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  
   const {createUser}=useContext(AuthContext) 
   const [isShown, setIsShown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
   const handlePasswordShow = (e) => {
     e.preventDefault();
     setIsShown(!isShown);
   };
   const handleRegister = (e) => {
     e.preventDefault();
     const form = new FormData(e.currentTarget);
     const name = form.get("name");
     const photo = form.get("photo");
     const email = form.get("email");
     const password = form.get("password");
     const checkTerms = e.target.checkTerms.checked;
     const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{6,}$/;
     //checkbox
     if (!checkTerms) {
       Swal.fire({
         title: "Error!",
         text: "Please Read and accept our Terms & Conditions to create your account",
         icon: "error",
         confirmButtonText: "OK",
       });
       return;
     }
     //password
     if (!regex.test(password)) {
       Swal.fire({
         title: "Error!",
         text: "Error: Please make sure your password is at least 6 characters or longer and contain uppercase letter and also a special character",
         icon: "error",
         confirmButtonText: "OK",
       });
       return;
     }
     //create user
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          updateProfile(user, {
            displayName: name,
            photoURL: photo,
          })
            .then()
            .catch((error) => {
              Swal.fire({
                title: "Error!",
                text: `${error.message}`,
                icon: "error",
                confirmButtonText: "OK",
              });
            });
          Swal.fire({
            title: "Congrats!!",
            text: "You registered successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
            navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: `${ error.message }`,
            icon: "error",
            confirmButtonText: "OK",
          });
        });
   };
  return (
   <div>
     <div className="shape-bg bg-fixed relative py-14 md:py-24 lg:py-28">
   <div className="absolute left-0 top-0 w-full h-full bg-[#312d3f] dark:opacity-90 opacity-0"></div>
       <div className="dark:bg-[#08041f] relative z-20 bg-white  max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-12">
         <h2 className="text-4xl dark:text-white  text-[#08041f] mb-9 font-semibold">
           Register Now
         </h2>
         <form
         onSubmit={handleRegister}
           className="flex flex-col text-[#08041f] gap-3" 
         >
           <div className="flex relative items-center mb-3 rounded-md  ">
             <label
               className="p-3 absolute rounded-md dark:text-white  "
               htmlFor="name"
             >
               <FaUser />
             </label>
             <input
               className="w-full rounded-full  pl-12 py-2 bg-[#8173cf] dark:placeholder:text-[#fff] placeholder:text-[#08041f] dark:text-white text-[#08041f]  border-none"
               type="text"
               name="name"
               placeholder="Name*"
               id="name"
               required
             />
           </div>
           <div className="flex relative items-center mb-3 rounded-md  ">
             <label
               className="p-3 absolute rounded-md dark:text-white  "
               htmlFor="photo"
             >
               <FaCamera />
             </label>
             <input
               className="w-full rounded-full  pl-12 py-2 bg-[#8173cf] dark:placeholder:text-[#fff] placeholder:text-[#08041f] dark:text-white text-[#08041f]  border-none"
               type="text"
               name="photo"
               placeholder="Photo URL*"
               id="photo"
               required
             />
           </div>
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
               placeholder="Create Password*"
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
           <div className="py-3 text-theme-black dark:text-white">
              <input type="checkbox" id="checkTerms" name="checkTerms" />
              <label className="pl-2" htmlFor="checkTerms">
                Please accept our 
                <Link
                  className="font-medium ml-2 underline underline-offset-2"
                  to="/"
                >
                   Terms & Conditions
                </Link>
              </label>
            </div>
           <div className="mt-3">
             <input
               className="btn rounded-full  border-none bg-[#08041f] dark:bg-white dark:text-[#08041f] dark:hover:bg-theme-yellow hover:bg-theme-yellow hover:text-[#fff]  text-white text-xl px-8"
               type="submit"
               value="Register"
             />
           </div>
         </form>
       </div>
       <div className="mt-8 dark:bg-[#08041f]  relative z-20 bg-white  max-w-3xl mx-auto md:px-12 px-6 py-6 md:py-14 flex flex-col md:flex-row justify-between items-center gap-4">
         <h2 className="text-2xl font-semibold dark:text-white  text-[#08041f] ">
           Already have an account?
         </h2>
         <Link to="/login">
           <button className="btn rounded-full  border-none bg-[#08041f] dark:bg-white dark:text-[#08041f] dark:hover:bg-theme-yellow hover:bg-theme-yellow hover:text-[#ddd]  text-white text-xl px-8">Log in</button>
         </Link>
       </div>
     </div>
   </div>
 );
};

export default Register;