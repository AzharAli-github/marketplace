import React from "react";
import firstImg from "../../assets/collectionImages/111.png"
import solanaIcon from "../../assets/Group 8.png"
import { useState, useEffect } from "react";

export const CollectionCards = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("./collections.json")
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div className="flex flex-col justify-between align-middle flex-wrap h-80 w-11/12 my-9 mx-auto leading-10 text-white">
            {items.map((item) => (
                <div className="flex items-center justify-around p-4 w-1/3">
                    <h1>{item.id}</h1>
                    <img src={item.imgSrc} alt="" className="rounded-full" />
                    <div>
                        <h2 className="font-bold text-lg">{item.header}</h2>
                        <p className="flex items-center text-sm font-thin">Floor <img src={solanaIcon} alt="" srcset="" /> <span>{item.number}</span></p>
                    </div>
                    <div>
                        <p className="font-thin text-sm">{item.percentOne} %</p>
                        <p className="flex items-center font-thin text-sm"><img src={solanaIcon} alt="" /><span>{item.percentTwo}%</span></p>
                    </div>
                </div>
            ))}
        </div>
    )
}