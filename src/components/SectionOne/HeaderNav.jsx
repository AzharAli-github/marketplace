import React from "react";
import { CiFilter } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa6";
import { TbGavel } from "react-icons/tb";
import { SlGraph } from "react-icons/sl";
import { SiSimpleanalytics } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa6";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaTableCells } from "react-icons/fa6";

export const HeaderNav = () => {
  return (
    <div className="text-white flex items-center py-3 border-b-2 border-primaryTwo">
      <div className="flex w-1/6 justify-between text-2xl px-5">
        <span className="hover:text-lightBlue cursor-pointer">
          <CiFilter />
        </span>
        <span className="hover:text-lightBlue cursor-pointer">
          <FaAngleLeft />
        </span>
      </div>
      <div className="w-3/6">
        <ul className="flex justify-between">
          <li className="flex items-center font-thin hover:text-lightBlue cursor-pointer">
            <span className="px-3 text-lg">
              <FaLayerGroup />
            </span>
            items
          </li>
          <li className="flex items-center font-thin hover:text-lightBlue cursor-pointer">
            <span className="px-3 text-lg">
              <TbGavel />
            </span>
            Auctions
          </li>
          <li className="flex items-center font-thin hover:text-lightBlue cursor-pointer">
            <span className="px-3 text-lg">
              <SlGraph />
            </span>
            Activity
          </li>
          <li className="flex items-center font-thin hover:text-lightBlue cursor-pointer">
            <span className="px-3 text-lg">
              <SiSimpleanalytics />
            </span>
            Analytics
          </li>
        </ul>
      </div>
      <div className="w-2/6">
        <div className="flex justify-around">
          <li className="flex items-center justify-around font-semibold w-1/2">
            {/* Price: Low to high <span>{<FaAngleDown />}</span> */}
            <details className="group">
              <summary className="rounded-lg marker:content-none cursor-pointer shadow">
                <span className="text-sm flex pr-1 items-center">
                  Price: Low to High{" "}
                  <span className="pl-4">
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
              <div className="p-4 absolute opacity-100 bg-primaryTwo">
                <p className="text-sm">Content for Nested Dropdown 1</p>
              </div>
            </details>
          </li>
          <div className="flex justify-between border-2 border-primaryTwo text-xl w-1/5 p-2">
            <span className="cursor-pointer">
              <FaTableCellsLarge />
            </span>
            <span className="cursor-pointer">
              <FaTableCells />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
