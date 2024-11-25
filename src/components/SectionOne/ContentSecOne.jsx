import React from "react";
import { LuRefreshCw } from "react-icons/lu";
import {Cards} from "../Cards"

export const ContentSecOne = () => {
  return (
    <div>
      <div>
        <ul className="flex items-center justify-around pl-2 py-5">
          <li className="px-3 flex items-center text-lightBlue">
            <span className="px-3">
              <LuRefreshCw />
            </span>
            refreshed 3 sec ago
          </li>
          <li>
            <div className="relative max-w-sm mx-auto my-4">
              <input
                className="w-full text-sm py-2 px-5 border-gray-700 bg-primaryThree text-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          <li className="flex text-white">
            <button className="px-7 py-1 border-2 border-primaryTwo mx-2 rounded">Buy</button>
            <button className="px-7 py-1 border-2 border-primaryTwo mx-2 rounded">Bid</button>
          </li>
        </ul>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
  );
};
