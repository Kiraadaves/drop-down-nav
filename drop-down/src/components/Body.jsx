import Button from "./Button";
import Databiz from "../assets/images/Databiz";
import Audiophile from "../assets/images/Audiophile";
import Meet from "../assets/images/Meet";
import Marker from "../assets/images/Marker";
import desktop from "../assets/images/desktop.png";
import mobile from "../assets/images/mobile.png";
import "animate.css/animate.min.css";
import { useState } from "react";

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-col lg:flex-row lg:mt-16 pb-12 lg:gap-16 lg:px-36">
      <div className="left text-center lg:text-left order-last lg:order-first lg:pr-20 flex flex-col justify-between ">
        <div className="lg:mt-28 mt-16">
          <header className="lg:text-7xl text-3xl font-extrabold">
            <h1>Make remote work</h1>
          </header>
          <p className="text-gray mt-12 lg:pr-28 lg:pl-0 px-4">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div className="mt-12">
            <Button
              text="Learn more"
              className={`border-2 border-solid bg-black text-white hover:bg-white hover:text-black rounded-2xl font-semibold px-7 py-3 animate__animated ${
                isHovered ? "animate__pulse" : ""
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
        <div>
          <div className="lg:mt-0 mt-12 flex gap-1 lg:gap-8 lg:justify-start justify-center">
            <Databiz />
            <Audiophile />
            <Meet />
            <Marker />
          </div>
        </div>
      </div>
      <div className="right lg:mt-0 mt-16">
        <img
          src={desktop}
          alt="Desktop Image"
          className="hidden lg:block max-w-full" // Hide on mobile
        />
        <img
          src={mobile}
          alt="Mobile Image"
          className="block lg:hidden max-w-full" // Hide on desktop
        />
      </div>
    </div>
  );
};

export default Main;
