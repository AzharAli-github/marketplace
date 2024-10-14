import React from "react";
import { useEffect, useState } from "react";

export const NavbarTop = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("/navbar.json") // Adjust this path according to your actual API or file structure
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          console.log(data.map(item => item.id)); // Log the ids of the items
        });
    }, []);
  
  return (
    <section className="flex justify-around items-center bg-primaryTwo ">
      <div className="text-lightBlue"><p>Trending Collection</p></div>
      <div>
        <ul className="flex items-center">
        {items.map((item) => (
            <li key={item.id} className="flex p-2 gap-1 cursor-pointer">
              <h3 className="text-lightBlue">#{item.id}</h3>
              <img src={item.imgSrc} alt="" className="w-6" />
              <p className="text-white text-sm font-thin">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lightBlue"><p>Tending Coins</p></div>
    </section>
  );
};
