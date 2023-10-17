import Careers from "../assets/images/Careers";
import "animate.css/animate.min.css";
import Button from "./Button";
import Feature from "./Feature";
import Closemenu from "../assets/images/Closemenu";
import { useState } from "react";

const Sidenav = ({showSidenav, setShowSidenav }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    window.onclick = (e) => {
    e.target.classList.contains("sidenav-wrapper") ? setShowSidenav(false) : "";
    };
    const toggleMenu = () => {
      setShowSidenav(!showSidenav);
    };
    return (
      <>
        <div
          className={
            showSidenav
              ? "sidenav-wrapper showsidenav-wrapper"
              : "sidenav-wrapper hidden"
          }
        >
          <div
            className={`lg:hidden py-3 px-8 ${showSidenav ? "sidenav show-sidenav" : "sidenav"}`}
          >
            <nav>
              <button onClick={toggleMenu} className="x mt-3">
                {showSidenav ? <Closemenu className="" /> : ""}
              </button>
              <ul className="mt-3">
                <Feature />
                <Careers />
                <h1 className="text-gray mt-5 lg:mt-0 hover:text-black hover:font-semibold cursor-pointer">
                  Careers
                </h1>
                <h1 className="text-gray mt-5 lg:mt-0 hover:text-black hover:font-semibold cursor-pointer">
                  About
                </h1>
              </ul>
              <div className="flex flex-col gap-4">
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
            </nav>
          </div>
        </div>
      </>
    );
};

export default Sidenav;
