import React from "react";
import { BsStars } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa6";
import { RxRocket } from "react-icons/rx";
import { FaParachuteBox } from "react-icons/fa6";
import { TbSpeakerphone } from "react-icons/tb";
import { FaBook } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='border-r-2 border-primaryTwo'>
      <div className='bg-primaryOne w-52 h-screen pl-3'>
        <ul className='leading-10 text-white'>
          <Link to='/'>
            <li className='flex items-center'>
              <span className='px-3'>
                <RiCheckboxMultipleBlankLine />
              </span>
              Dex
            </li>
          </Link>
          <li>
            <details className='group'>
              <summary className='rounded-lg marker:content-none cursor-pointer text-white focus:bg-primaryThree'>
                <span className='font-semibold flex items-center'>
                  <span className='px-3'>
                    <BsStars />
                  </span>
                  Marketplace{" "}
                  <span>
                    <svg
                      className='w-5 h-5 text-gray-500 transition group-open:rotate-90'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                      ></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div className='p-4 text-gray-600 '>
                <Link to='sectwo'>
                  <p className='cursor-pointer hover:text-lightBlue'>
                    Popular Collection
                  </p>
                </Link>
                <Link to='home'><p className='cursor-pointer hover:text-lightBlue'>Auctions</p></Link>
                <p className='cursor-pointer hover:text-lightBlue'>
                  Drop Calender
                </p>
              </div>
            </details>
          </li>
          <li className='flex items-center'>
            <details className='group'>
              <summary className='rounded-lg marker:content-none cursor-pointer text-white focus:bg-primaryThree'>
                <span className='font-semibold flex items-center'>
                  <span className='px-3'>
                    <SlGraph />
                  </span>
                  Insight{" "}
                  <span>
                    <svg
                      className='w-5 h-5 text-gray-500 transition group-open:rotate-90'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                      ></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div className='p-4 text-gray-600'>
                <p className='cursor-pointer hover:text-lightBlue'>Stats</p>
                <p className='cursor-pointer hover:text-lightBlue'>
                  My Watchlist
                </p>
              </div>
            </details>
          </li>
          <li className='flex items-center'>
            <span className='px-3'>
              <RxRocket />
            </span>
            Launchpad
          </li>
          <li className='flex items-center'>
            <span className='px-3'>
              <FaLayerGroup />
            </span>
            NFT Staking
          </li>
          <li className='flex items-center'>
            <span className='px-3'>
              <BiSupport />
            </span>
            Support
          </li>
          <li className='flex items-center'>
            <span className='px-3'>
              <FaParachuteBox />
            </span>
            Airdrop
          </li>
          <li className='flex items-center'>
            <span className='px-3'>
              <FaBook />
            </span>
            Intro to NFT
          </li>
          <li className='flex items-center'>
            <span className='px-3'>
              <TbSpeakerphone />
            </span>
            News
          </li>
        </ul>
      </div>
    </div>
  );
};
