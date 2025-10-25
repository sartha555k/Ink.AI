import React from "react";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div
          className="inline-flex items-center
            justify-center gap-4 px-6 py-1.5 mb-4 border rounded-full
            text-sm font-bold"
        >
          <p className="text-gray-200 text-2xl">Where AI Meets Words</p>
        </div>
        <h1
          className="text-3xl sm:text-6xl font-semibold
        sm:leading-16 text-gray-400"
        >
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs
        text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
          molestias atque, culpa voluptatibus suscipit consequuntur repellendus
          id. Doloremque, iusto!
        </p>
        <form className="flex justify-between max-w-lg max-sm:scale-75
        mx-auto border border-gray-300 rounded overflow-hidden bg-black">
            <input 
            className="w-full pl-4 outline-none"
            type="text" placeholder="Search for text" required/>
            <button
            className="text-white px-8 py-2 m-1.5 rounded hover:scale-115
            transition-all cursor-pointer bg-gray-700" 
            type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
