import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="animate-spin rounded-full h-18 w-18 border-6
       border-t-white border-y-gray-900"
      ></div>
    </div>
  );
};

export default Loader;
