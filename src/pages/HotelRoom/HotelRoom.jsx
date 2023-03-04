import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const HotelRoom = () => {
    const {hotelRooms} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleOrders = () => {
        navigate('/orders')
    }
    return (
        <div>
           <h2 className='text-2xl my-6 text-center '>Your Room of Choice</h2>
           <div className='grid grid-cols-4 gap-4 mx-auto container mb-4'>
                {
                    hotelRooms.map(room => (
                        <div key={room.id} className='bg-slate-100 border border-slate-300 p-2 rounded'>
                            <img className='rounded-t w-full h-40' src={room.room_img} alt="" />
                            <h3 className='text-[1rem] font-semibold text-slate-600'>{room.title}</h3>
                            <div className='flex text-sm text-slate-700 justify-between my-1'>
                                <p className='bg-sky-300 px-2 rounded'>D/ : <span className='text-red-600'>{room.booking_price.per_day}</span> </p>

                                <p className='bg-slate-700 text-white px-2 rounded'>N/: <span className='text-purple-200'>{room.booking_price.per_night}</span></p>

                                <p className='bg-green-700 text-white px-2 rounded'>M/: {room.booking_price.per_month}</p>
                            </div>

                            <button onClick={handleOrders} className='bg-gradient-to-r  from-[#EF512E] to-[#DE0655] px-4 py-1 text-white rounded mt-3 outline-none'>{room.book}</button>
                        </div>
                    ))
                }
           </div>
        </div>
    );
};

export default HotelRoom;