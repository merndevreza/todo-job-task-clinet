import teamImg from "../../assets/images/team.png";
const Team = () => {
  return (
    <div className="bg-[rgb(255,255,255)] py-16">
      <div className="flex flex-col md:flex-row  gap-7 container mx-auto ">
        <div className="lg:max-w-[50%] p-4">
          <img className="rounded-full" src={teamImg} alt="" />
        </div>
        <div className="flex flex-col justify-center  lg:max-w-xl text-center md:text-left gap-4">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-[#5B28AA]">
          It is so easy to be efficient
          </h2>
          <p className="md:text-lg text-[#1c0738]">
            SCC Tech helps to manage task of Developers, Designers, Business owners, Managers, Sales and Bankers. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
