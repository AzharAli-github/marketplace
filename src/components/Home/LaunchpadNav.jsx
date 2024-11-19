import React from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { useCounter } from "../Context/Context";
import { LaunchpadCards } from "./LaunchpadCards";
import { useState } from "react";

export const LaunchpadNav = () => {
    const { count, setCount } = useCounter();
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index, countValue) => {
        setCount(countValue);
        setSelectedIndex(index);
    };

    return (
        <>
            <div className="text-white mt-8 flex justify-center">
                <div className="flex items-center w-4/5">
                    <h1 className="text-2xl font-bold px-6">Launchpad Drops</h1>
                    <div className="border-2 border-primaryTwo rounded-full">
                        <ul className="flex items-center">
                            <li
                                className={`py-2 px-4 rounded-full ${selectedIndex === 0 ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' : ''}`}
                                onClick={() => handleClick(0, 0)}
                            >
                                <button>Next 7 Days</button>
                            </li>
                            <li
                                className={`py-2 px-4 rounded-full ${selectedIndex === 1 ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' : ''}`}
                                onClick={() => handleClick(1, 1)}
                            >
                                <button>Coming Soon</button>
                            </li>
                            <li
                                className={`py-2 px-4 rounded-full ${selectedIndex === 2 ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' : ''}`}
                                onClick={() => handleClick(2, 2)}
                            >
                                <button>Live</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="1/5 text-end">
                    <button className="border-2 border-primaryTwo px-4 py-1 rounded-md">See All</button>
                </div>
            </div>
            {/* <div>
                <LaunchpadCards  />
            </div> */}
        </>
    )
}