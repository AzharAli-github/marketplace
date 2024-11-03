import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import '/src/App.css';
import { useEffect, useState } from "react";

export const HomeSlider = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/slides.json") // Adjust this path according to your actual API or file structure
          .then((response) => response.json())
          .then((data) => {
            setItems(data);
            console.log(data.map(item => item.id)); // Log the ids of the items
          });
      }, []);
    return (
        <div className='bg-primaryOne mt-7'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {items.map((item) => (
                    <SwiperSlide>

                        <div className="flex justify-between border-2 border-primaryTwo rounded-3xl h-4/5 mb-7">
                            <div className="text-start px-7 h-full flex flex-col items-baseline justify-center w-1/2">
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 inline-block text-transparent bg-clip-text pb-4">A Place for All Your <br /><span className="bg-gradient-to-r from-pink-500 to-blue-500 inline-block text-transparent bg-clip-text">Crypto Needs</span></h1>
                                <p className="text-grayText text-base pb-5">{item.description}</p>
                                <button className="bg-gradient-to-r from-pink-400 to-blue-400 inline-block text-white px-5 py-2 rounded-md">Go to Launchpad</button>
                            </div>
                            <div className="h-full w-1/2">
                                <img src={item.imgSrc} alt="NFT Image" className="h-full w-full" />
                            </div>
                        </div>
                    </SwiperSlide>))}
            </Swiper>
        </div>
    );
}