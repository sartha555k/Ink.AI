import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center spcae-y-2
    my-32">
      <h1 className="md:text-4xl text-2xl font-semibold">Never miss a blog !!</h1>
      <p className="md:text-lg text-gray-300 pb-8">Subscribe to get the lastest blog , new tech , and exclusive news .</p>
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          className="border border-gray-400 rounded-md h-full 
            border-r-0 outline-none w-full rounded-r-none px-3 text-gray-400"
          type="text"
          placeholder="Enter your Email"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full border-gray-400 bg-gray-700
            text-white cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
