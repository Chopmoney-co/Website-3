import { useEffect, useRef } from 'react';
import { Bg, Bg1, Bg2, Bg3 } from "../../assets";
import Banner from "./components/Banner";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Video from "./components/Video";

const Home = () => {
  const bgRef1 = useRef(null);
  const bgRef2 = useRef(null);
  const bgRef3 = useRef(null);
  const bgRef4 = useRef(null);

  useEffect(() => {
    const bounceAnimation = (ref, delay) => {
      setTimeout(() => {
        ref.current.classList.add('animate-bounce');
      }, delay);
    };

    // Start animations with different delays
    bounceAnimation(bgRef1, 0);
    bounceAnimation(bgRef2, 500); // Adjust the delay as needed
    bounceAnimation(bgRef3, 1000); // Adjust the delay as needed
    bounceAnimation(bgRef4, 1800); // Adjust the delay as needed
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#1F1F1F]">
      <div className="relative">
        <div ref={bgRef1} className="absolute top-[250px] right-[150px] hidden lg:block" >
          <img src={Bg} alt="" />
        </div>
        <div ref={bgRef2} className="absolute top-[250px] left-[150px] hidden lg:block">
          <img src={Bg3} alt="" />
        </div>
        <div ref={bgRef3} className="absolute top-[700px] right-[450px] hidden lg:block">
          <img src={Bg1} alt="" />
        </div>
        <div ref={bgRef4} className="absolute top-[700px] left-[450px] hidden lg:block">
          <img src={Bg2} alt="" />
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Steps />
        <Video />
        <Banner />
        <Faqs />
      </div>
    </div>
  );
};

export default Home;
