import aboutImg from "../../assets/images/about-bg.jpg";
const About = () => {
  return (
    <div className="flex justify-between relative">
      <img src={aboutImg} alt="" /> 
      <div className="absolute flex justify-center flex-col h-full w-full left-0 top-0  py-16">
         <div className="max-w-lg lg:max-w-xl ml-3 lg:ml-8  space-y-5 pr-28 lg:pr-0 ">
         <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-[#5B28AA]">
         SCC Tech makes it easy
        </h2>
        <p className="md:text-lg text-[#1c0738]">
          Organize and manage your team like a boss with Bitrix24, a free task
          management tool packing more capabilities than you can imagine.
        </p>
         </div> 
      </div>
    </div>
  );
};

export default About;
