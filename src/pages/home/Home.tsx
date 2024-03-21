import { Bg, Bg1, Bg2, Bg3 } from "../../assets";
import Hero from "./components/Hero";
import Steps from "./components/Steps";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-[#1F1F1F]">
      <div className="relative">
        <div className="animate-bounce absolute top-[250px] right-[150px] hidden lg:block">
          <img src={Bg} alt="" />
        </div>
        <div className="animate-bounce absolute top-[250px] left-[150px] hidden lg:block">
          <img src={Bg3} alt="" />
        </div>
        <div className="animate-bounce absolute top-[650px] right-[450px] hidden lg:block">
          <img src={Bg1} alt="" />
        </div>
        <div className="animate-bounce absolute top-[650px] left-[450px] hidden lg:block">
          <img src={Bg2} alt="" />
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Steps />
      </div>
    </div>
  );
};

export default Home;
