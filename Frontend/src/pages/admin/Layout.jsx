import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../Context/AppContext";

const Layout = () => {
  const {axios , setToken , navigate} = useAppContext();

  const logout = () => {
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null)
    navigate("/");
  };
  return (
    <>
      <div
        className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b
    border-gray-400"
      >
        <div
          onClick={() => navigate("/")}
          className="font-bold text-2xl w-32 sm:w-44 cursor-pointer"
        >
          Ink.AI
        </div>
        <button
          onClick={logout}
          className="text-sm px-8 py-2 text-white border rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;
