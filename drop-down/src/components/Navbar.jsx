import Logo from "../assets/images/Logo";
import Careers from "../assets/images/Careers";
import "animate.css/animate.min.css";
import { useState } from "react";
import Button from "./Button";
import Feature from "./Feature";
import Menu from "../assets/images/Menu";


const Navbar = ({showSidenav, setShowSidenav}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setShowSidenav(!showSidenav);
  };
  return (
    <nav className={`pt-6 px-8 `}>
      <div className=" lg:static  navbar-container flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="relative flex flex-col lg:flex-row lg:gap-16 gap-5">
          <Logo className="logo" />
          <div className="lg:hidden absolute right-0">
            <button onClick={toggleMenu} className="">
              {showSidenav ? "" : <Menu className=""/>}
            </button>
          </div>
          <div
            className={`feature hidden  lg:z-auto z-10 lg:flex  lg:flex-row gap-4 lg:gap-16 ${
              showSidenav ? "block" : "hidden"
            }`}
          >
            <Feature />
            <Careers />
            <h1 className="text-gray mt-3 lg:mt-0 hover:text-black hover:font-semibold cursor-pointer">
              Careers
            </h1>
            <h1 className="text-gray mt-3 lg:mt-0 hover:text-black hover:font-semibold cursor-pointer">
              About
            </h1>
          </div>
        </div>
        <div
          className={`mbb hidden login mt-3 lg:mt-0  lg:flex  lg:flex-row gap-3 lg:gap-6 lg:items-center ${
            showSidenav ? "block" : "hidden"
          }`}
        >
          <div>
            <Button
              text="Login"
              className={`text-gray hover:text-black w-full hover:font-semibold animate__animated ${
                isHovered ? "animate__swing" : ""
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="flex justify-center lg:pb-3">
            <Button
              text="Register"
              className={`px-6 mt-3 py-2 rounded-2xl border-2 border-solid border-customColor text-gray hover:text-black hover:font-semibold animate__animated ${
                isHovered ? "animate__pulse" : ""
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
