import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="dark:bg-theme-black bg-[#7b5e27]">
      <div className=" footer footer-center p-10 bg-[#03112c6c] text-white">
        <aside>
          <img className="w-[160px] lg:w-[200px]" src={logo} alt="" />
          <div>
            <h2 className="text-3xl md:text-4xl mb-2 text-theme-yellow font-semibold uppercase">
            SCC Technovision Inc
            </h2>
            <h3 className="hidden md:block md:text-xl font-medium text-white">
              Manage your tasks effectively
            </h3>
          </div>
          <p className="text-lg mt-5 lg:text-xl max-w-5xl">
          Organize and manage your team like a boss with Bitrix24, a free task management tool packing more capabilities than you can imagine.
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-xl">
            <Link to="/">
              <BsLinkedin />
            </Link>
            <Link to="/">
              <FaSquareXTwitter />
            </Link>
            <Link to="/">
              <FaFacebook />
            </Link>
            <Link to="/">
              <RiInstagramFill />
            </Link>
          </div>
        </nav>
      </div>
      <p className="bg-[#010114] text-center text-white py-4">
        Copyright &copy; 2023, All right reserved by Rezaul Karim.
      </p>
    </footer>
  );
};

export default Footer;
