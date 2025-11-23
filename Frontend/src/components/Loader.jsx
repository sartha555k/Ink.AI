import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="animate-spin rounded-full h-18 w-18 border-6
       border-t-pink-400 border-y-pink-400"
      ></div>
    </div>
  );
};

export default Loader;
