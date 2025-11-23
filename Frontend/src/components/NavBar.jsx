import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

const NavBar = () => {
  const {navigate, token} = useAppContext();
  return (
    <div
      className="flex justify-between items-center 
    py-5 mx-8 sm:mx-20 xl:mx-32"
    >
      <div
      onClick={()=>navigate('/')} 
      className="font-bold text-2xl w-32 sm:w-44 cursor-pointer text-pink-300">Ink.AI</div>
      <button
      onClick={()=>navigate('/admin')} 
      className="flex items-center gap-2 rounded-full
      text-sm cursor-pointer bg-primary text-black font-bold 
      bg-pink-400 px-10 py-2.5 border hover:bg-black hover:text-white">
        {token ? 'DashBoard': 'Login'}
        </button>
    </div>
  );
};

export default NavBar;
