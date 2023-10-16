import "animate.css/animate.min.css";
import { useState } from "react";
import Todo from "../assets/images/Todo";
import Calender from "../assets/images/Calender";
import Reminders from "../assets/images/Reminders";
import Planning from "../assets/images/Planning";

const Feature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cursor:pointer mt-3 lg:mt-0 lg:relative lg:inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {" "}
        <h1 className="text-gray hover:text-black hover:font-semibold cursor-pointer">
          Feature
        </h1>
        {isOpen ? (
          <svg
            className=""
            width="10"
            height="6"
            xmlns="http://www.w3.org/2000/svg"
          >
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
        <div className="animate__animated animate__pulse dropdown lg:origin-top-left lg:absolute lg:-left-20 mt-4 w-44 bg-white border border-gray-300 py-4 pl-4 rounded-lg">
          <ul className=" flex flex-col gap-1 items-center">
            <li className="flex gap-4  justify-center pr-4">
              <Todo /> <h1>Todo List</h1>
            </li>
            <li className="flex gap-4  justify-center pr-4">
              <Calender /> <h1>Calender</h1>
            </li>
            <li className="flex gap-4 ml-4 justify-center pr-4">
              <Reminders /> <h1>Reminders</h1>
            </li>
            <li className="flex gap-4  justify-center pr-4">
              <Planning /> <h1>Planning</h1>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Feature;
