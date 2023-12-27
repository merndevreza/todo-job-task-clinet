import { Link, NavLink } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { GoSun } from "react-icons/go";
import logo from "../../assets/images/logo.png"
const Header = () => {
   const [scroll, setScroll] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
  //fix menu at top
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
  }, []);

  //user-dropdown
//   const handleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
  //dark light toggler
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleDarkLight = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  //mobile Menu
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={
        scroll
          ? "fixed z-[99] top-0 w-full dark:bg-[#08041f] bg-[#fff] shadow-lg"
          : "dark:bg-[#08041f] bg-[#fff]"
      }
    >
      <header className="container mx-auto py-4 px-2 flex justify-between items-center">
        <div className="order-2 xl:order-1">
          <Link to="/">
            <div className="flex items-center gap-3">
              <img
                className="max-h-[70px]"
                src={logo}
                alt=""
              />
            </div>
          </Link>
        </div>
        <nav className="order-1 xl:order-2">
          <button
            onClick={handleMobileMenu}
            className="text-2xl border-2 p-1 dark:text-white text-[#08041f] xl:hidden"
          >
            <RiMenuLine />
          </button>
          <ul
            className={
              isOpen
                ? "flex flex-col gap-4  text-xl font-medium  pl-6 absolute z-30 left-0 top-0 h-screen w-1/3 bg-theme-black text-[#08041f] dark:text-white "
                : "hidden xl:flex gap-6 text-[#08041f] dark:text-white  text-lg font-medium "
            }
          >
            <div className={isOpen ? " text-right mt-4 mr-4" : "hidden"}>
              <button
                onClick={handleMobileMenu}
                className={
                  isOpen ? "text-2xl border-2 p-1 border-white" : "hidden"
                }
              >
                <IoClose />
              </button>
            </div>
            <li className="hover:text-[#5B28AA]">
              <NavLink to="/">Home</NavLink>
            </li> 
            <li className="hover:text-[#5B28AA]">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="hover:text-[#5B28AA]">
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
        <div className="order-last flex items-center gap-2">
          <button className="lg:mr-5" onClick={handleDarkLight}>
            {theme === "dark" ? (
              <GoSun 
              className="dark:text-white text-[#08041f] text-[25px]" />
            ) : (
               <IoMdMoon className="dark:text-white text-[#08041f] text-[25px]" />
            )}
          </button>
          {/* {isLoggedIn ? (
            user?.photoURL && (
              <div className="relative ">
                <img
                  onClick={handleDropdown}
                  className="w-[50px] h-[50px] object-cover cursor-pointer rounded-full "
                  src={user.photoURL}
                  alt="user photo"
                />
                {isDropdownOpen && (
                  <div className="absolute z-50 right-0 text-center px-4 py-6 bg-[#020c25]">
                    <Link
                      className="text-lg font-medium text-white mb-3 inline-block"
                      to="dashboard"
                    >
                      Dashboard
                    </Link>
                    <button className="btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-white cursor-pointer text-theme-dark text-xl px-8 slider-button">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )
          ) : (
            <Link to="/login">
              <Button btnName={"Login"}></Button>
            </Link>
          )} */}
        </div>
      </header>
    </div>
  );
};

export default Header;
