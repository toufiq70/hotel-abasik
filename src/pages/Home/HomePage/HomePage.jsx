import React from 'react';
import HotelFeatures from '../../HotelFeatures/HotelFeatures';
import HotelRoom from '../../HotelRoom/HotelRoom';
import Sliders from '../../Slider/Sliders';

const HomePage = () => {
  
   
    return (
        <div>
            <Sliders/>
            <HotelFeatures></HotelFeatures>
            <HotelRoom/>
        </div>
    );
};

export default HomePage;