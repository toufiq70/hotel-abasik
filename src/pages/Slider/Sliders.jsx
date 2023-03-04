import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Sliders = () => {
  const { sliders } = useContext(AuthContext);
  console.log(sliders);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNextIndex = () => {
    const isLastIndex = currentIndex === sliders.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePrevIndex = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      style={{ backgroundImage: `url(${sliders[currentIndex].img})` }}
      className="h-full z-[-1] relative group duration-500 ease-in bg-no-repeat bg-cover bg-center container mx-auto rounded"
    >
      <div className="w-1/2 flex flex-col items-center  lg:py-20 xl:py-20 md:py-10 lg:px-20 xl:px-24 px-10 bg-gradient-to-r from-sky-800 to-sky/60 rounded">
        <div>
          <p className="text-3xl font-semibold text-[#ffffff]">
            {sliders[currentIndex].title}
          </p>
          <p className="text-xs mt-4 text-white/70 leading-none">{sliders[currentIndex].description}</p>
          <button className="inline-flex justify-center items-center   text-sm font-medium  px-6 my-4 tracking-wide transition duration-200 shadow-md focus:shadow-outline focus:outline-none  py-2 bg-gradient-to-r  from-[#EF512E] to-[#DE0655] rounded text-white outline-none h-8">{sliders[currentIndex].btn}</button>
        </div>
      </div>

      <div className="absolute top-[50%] left-5 hidden group-hover:block  -translate-x-0 translate-y-[-50%] p-2 rounded-full bg-black/20 text-white text-sm cursor-pointer hover:bg-black/50 transition duration-200 ">
        <button onClick={handlePrevIndex}>Prev</button>
      </div>
      <div className="absolute top-[50%] right-5 hidden group-hover:block  -translate-x-0 translate-y-[-50%] p-2 rounded-full bg-black/20 text-white  text-sm cursor-pointer hover:bg-black/50 transition duration-200 ">
        <button onClick={handleNextIndex}>Next</button>
      </div>
    </div>
  );
};

export default Sliders;
