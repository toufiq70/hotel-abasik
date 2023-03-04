import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import {FaSearch} from 'react-icons/fa'

const Header = () => {
  const { headers,user ,logOut,setUser} = useContext(AuthContext);
  console.log(headers);

  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }


  const handleLogOut =() => {
    logOut()
    .then( () => {
        setUser({})
        // navigate("/register")
    })
    .catch(() =>{
        setUser({})
    })
    
}


  return (
    <div className="bg-slate-300 sticky w-full top-0 shadow-lg flex px-20 items-center justify-between font-[Inter]">
      {/* logo */}
      <div>
        <Link to="" className="text-xl font-bold text-[#de0606]">
          Classic Hotel
        </Link>
      </div>
      {/* search field */}
      <div className="relative">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="w-full border flex-grow appearance-none transition duration-200 border-gray-200 rounded px-4 py-3 shadow-sm text-sm focus:outline-none focus:shadow-outline  focus:border-[#DE0655] focus:ring-[#DE0655] focus:z-0 my-2 h-8"
        />
        <button className="absolute inset-y-0 inline-flex items-center right-0 px-3 text-[#DE0655] text-sm cursor-pointer">
            <FaSearch/>
        </button>
      </div>
      {/* nav links */}
      <div className="flex items-center text-[#DE0655]">
        {headers.map((links) => (
          <div key={links.id} className="">
            <Link to={links.path} className="mr-6 font-medium">
              {links.name}
            </Link>
          </div>
        ))}
      </div>
      {/* button */}
      <div>

        {
          user ? 
          <div>
            <a href="/register">
            <button onClick={handleLogOut} className="inline-flex justify-center items-center  w-full text-sm font-medium  px-6 my-2 tracking-wide transition duration-200 shadow-md focus:shadow-outline focus:outline-none  py-2 bg-gradient-to-r  from-[#EF512E] to-[#DE0655] rounded text-white outline-none h-8">
            Logout
            </button>
            </a>
          </div>
        :
        <button onClick={handleLogin} className="inline-flex justify-center items-center  w-full text-sm font-medium  px-6 my-2 tracking-wide transition duration-200 shadow-md focus:shadow-outline focus:outline-none  py-2 bg-gradient-to-r  from-[#EF512E] to-[#DE0655] rounded text-white outline-none h-8">
          Login
        </button>
        }

      </div>
    </div>
  );
};

export default Header;
