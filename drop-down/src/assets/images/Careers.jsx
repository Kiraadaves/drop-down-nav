import { useState } from "react";

const Careers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mt-6 lg:mt-0 cursor:pointer lg:relative lg:inline-block">
      <button
        className="flex items-center gap-2 focus:outline-none"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <h1 className="text-gray hover:text-black hover:font-semibold cursor-pointer">
          Company
        </h1>
        {isOpen ? (
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#686868"
              strokeWidth="1.5"
              fill="none"
              d="m1 5 4-4 4 4"
            />
          </svg>
        ) : (
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#686868"
              strokeWidth="1.5"
              fill="none"
              d="m1 1 4 4 4-4"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="animate__animated animate__pulse lg:origin-top-left lg:absolute lg:left-0 mt-4 w-32 bg-white lg:border lg:border-[#ebe7e7] lg:shadow-xl ml-4 lg:ml-0  py-4 px-6 rounded-lg">
          <ul className=" flex flex-col justify-center gap-1 ">
            <li className="hover:bg-[#f3e76a86] cursor-pointer">Our Team</li>
            <li className="hover:bg-[#f3e76a86] cursor-pointer">History</li>
            <li className="hover:bg-[#f3e76a86] cursor-pointer">Blog</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Careers;
