import React from "react";
import { useState, useEffect } from "react";
import { useCounter } from "../Context/Context";

export const LaunchpadCards = () => {
    const [items, setItems] = useState([])
    const { count, setCount } = useCounter();


    useEffect(() => {
        if (items.length === 0) {
            fetch("./collections.json")
                .then(res => res.json())
                .then(data => setItems(data))
                .catch(err => console.error("Failed to fetch collections", err));
        }
    }, [items]);

    const getItemsToDisplay = () => {
        const startIndex = (count * 4);
        const endIndex = startIndex + 4;
        return items.slice(startIndex, endIndex);
    };

    return (
        <div>
            <div className="flex justify-around items-center">
            {getItemsToDisplay().map((item, index) => (
                <div key={index} className="text-center">
                    <img src={item.imgSrc} alt="" />
                    <h1>{item.header}</h1>
                    <p>Blocksmith Labs</p>
                    <button className="px-4 py-2 rounded-full bg-primaryTwo text-white">03d 16h 24m</button>
                </div>
            ))}
            </div>
        </div>
    )
}