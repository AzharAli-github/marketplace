import React from "react";
import { useState, useEffect } from "react";
import imgOne from "../../assets/1 420.png";
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { GiBinoculars } from "react-icons/gi";

export const HeaderSec = () => {
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("/header.json") // Adjust this path according to your actual API or file structure
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(data.map(item => item.id)); // Log the ids of the items
      });
  }, []);
  return (
    <div className="flex items-center pt-6 pb-2 border-y-2 border-primaryTwo">
      <div className="flex max-h-40 w-1/5 text-center pl-7">
        <img src={imgOne} alt="" srcset="" />
      </div>
      <div className="w-2/5">
        <h1 className="font-headerFont mb-2 text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 inline-block text-transparent bg-clip-text">
          De Gods
        </h1>
        
        <div className="flex flex-wrap justify-between pr-7 border-r-2 border-primaryTwo">
        {items.map((item) => (
          <div className="flex justify-between rounded w-2/5 my-2 px-6 py-1 bg-primaryTwo ">
            <h3 className="text-gray-500 font-thin">{item.name}</h3>
            <p className="text-gray-300">{item.number}</p>
          </div>
          ))}
        </div>
      </div>
      <div className="w-2/5 text-white">
        <div className="flex items-center justify-around">
          <div className="border-2 border-primaryTwo p-5 rounded">
            <span>
              <FaDiscord />
            </span>
          </div>
          <div className="flex items-center justify-between w-24 border-2 border-primaryTwo px-2 py-4 rounded">
            <FaTwitter />
            <span className="bg-primaryTwo px-1 rounded">104.4K</span>
          </div>
          <div className="border-2 border-primaryTwo p-5 rounded">
            <span>
              <FaGlobe />
            </span>
          </div>
          <div
            className="flex items-center border-2 border-primaryTwo px-5 py-4 justify-between rounded
            "
          >
            <GiBinoculars />
            <span className="bg-primaryTwo px-2 ml-2 rounded">6K</span>
          </div>
        </div>
        <div className="px-4 py-6">
          <p className="font-openSans font-thin">
            DeGods is a digital art collection and global community of creators,
            developers, entrepreneurs, athletes, artists, experimenters and
            innovators.
          </p>
        </div>
      </div>
    </div>
  );
};
