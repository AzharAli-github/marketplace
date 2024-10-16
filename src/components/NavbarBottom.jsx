import React from "react";
import imgLogo from "../assets/logo.png";
import person from "../assets/1 420.png";
import { FaBell } from "react-icons/fa6";

export const NavbarBottom = () => {
  return (
    <section className="bg-primaryOne">
      <div>
        <ul className="flex justify-between items-center">
          <li className="flex items-center gap-2">
            <img src={imgLogo} alt="" className="pl-4" />
            <h3 className="font-logoFont text-xl text-white">DEGEND FOREST</h3>
          </li>
          <li>
            <div className="relative max-w-sm mx-auto my-5">
              <input
                className="w-full py-2 px-4 border-gray-700 bg-primaryThree text-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="search"
                placeholder="Search"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-primaryThree border-gray-300 rounded-r-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                  />
                </svg>
              </button>
            </div>
          </li>
          <li className="flex items-center text-white">
            <span className="text-xl px-3">{<FaBell />}</span>
            <img src={person} alt="" className="w-7"/>
            <details className="group">
              <summary className="rounded-lg marker:content-none cursor-pointer shadow">
                <span className="text-md flex pr-7 pl-2 items-center">
                  Nested Dropdown 1{" "}
                  <span>
                    <svg
                      className="w-5 h-5 transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="p-2 mr-2 absolute bg-primaryTwo text-center">
                <p className="text-sm">Content for Nested Dropdown 1</p>
              </div>
            </details>
          </li>
        </ul>
      </div>
    </section>
  );
};
