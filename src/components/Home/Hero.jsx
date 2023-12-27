import { Link } from "react-router-dom";
import heroImg from "../../assets/images/a.jpg";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div className="relative">
      <img src={heroImg} alt="" />
      <div className="bg-[#28024c] w-full h-full  absolute left-0 top-0 opacity-20"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-5 text-[#fff] w-full md:w-3/4 lg:w-1/2 ">
        <h2 className=" text-5xl lg:text-7xl font-semibold">Organize your work and life</h2>
        <p className="text-lg">Organize and manage your team like a boss with Bitrix24, a free task management tool packing more capabilities than you can imagine.</p>
        <div>
        <Link to="/register">
          <Button btnName={"Let's Explore"}></Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
