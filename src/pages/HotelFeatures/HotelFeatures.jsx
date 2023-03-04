import React from "react";
import {BiSwim,BiWifi2,BiCrosshair} from 'react-icons/bi'
import {GiMeal} from 'react-icons/gi'
const HotelFeatures = () => {
  return (
    <div className="-mt-16 z-10 ">
      <div className="px-10 py-4 bg-white  mx-20 rounded shadow-md border border-purple-200">
        <div className="flex justify-between items-center">

            <div className="">
                <h3 className="text-[1rem] text-slate-700 font-semibold">Facilities</h3>
                <div className="flex items-center justify-between mt-3 gap-4 text-sm">
                    <div className="flex flex-col items-center ">
                        <span className="border-2 border-gray-200 text-sky-500 px-2 py-1 rounded-lg">
                        <BiSwim className=""/>
                        </span>
                        <p className="text-[0.7rem] text-slate-700">Swimming</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="border-2 border-gray-200 text-red-300 px-2 py-1 rounded-lg">
                        <BiWifi2/>
                        </span>
                        <p className="text-[0.7rem] text-slate-700">Wifi</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="border-2 border-gray-200 text-green-400 px-2 py-1 rounded-lg">
                        <BiCrosshair/>
                        </span>
                        <p className="text-[0.7rem] text-slate-700">AC</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="border-2 border-gray-200 text-orange-500 px-2 py-1 rounded-lg">
                        <GiMeal/>
                        </span>
                        <p className="text-[0.7rem] text-slate-700">Dinner</p>
                    </div>
                </div>
            </div>

            <div className="">
            <h3 className="text-[1rem] text-slate-700 font-semibold">Hotel for you</h3>
                <div className="flex flex-col items-start mt-1 justify-between  text-sm">
                    <p className="text-xs text-slate-400">5 Days 6 Night</p>
                    <div className="flex items-center bg-slate-50 rounded  py-2 border border-slate-300 mt-1 pr-3 cursor-pointer">
                        <span className="bg-blue-700 mx-3 w-4 h-4 rounded-full"></span>
                        <span className="text-sm">USD: $894</span>
                    </div>
                </div>
            </div>
            
            <div className="">
                <h3 className="text-[1rem] text-slate-700 font-semibold">Special for</h3>
                <div className="flex flex-col items-start mt-1 justify-between  text-xs text-slate-600">
                    <p>For 5 VIP conference </p>
                    <p>For Authorized Bar Shop</p>
                    <p>For Night Club</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFeatures;
