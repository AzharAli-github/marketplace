import React from "react";
import { useState, useEffect } from "react";
import iconTwo from "../assets/Group 8.png"

export const Cards = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("/cards.json") // Adjust this path according to your actual API or file structure
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          console.log(data.map(item => item.id)); // Log the ids of the items
        });
    }, []);
    return(
        <div  className="flex flex-wrap justify-around">
            {items.map((item) => (
        <div className="border-2 border-primaryTwo rounded-md my-3 pb-3">
          <img src={item.imgSrc} alt="" srcset=""/>
          <h2 className="font-semibold text-white p-2">{item.name} #{item.number}</h2>
          <p className="font-thin text-lightBlue text-sm px-2">{item.description}</p>
          <div className="flex items-center justify-between">
          <div className="flex items-center py-3">
            <img src={iconTwo} alt="" className="pl-2"/><span className="px-2 text-white font-semibold text-md">{item.price}</span>
          </div>
          <button className="border-2 border-primaryTwo px-4 py2 mx-2 text-lightBlue">Details</button>
          </div>
        </div>
        ))}
        </div>
    )
}