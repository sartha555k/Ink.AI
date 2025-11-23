import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center spcae-y-2
    my-32">
      <h1 className="md:text-4xl text-2xl font-semibold text-pink-400">Never miss a blog !!</h1>
      <p className="md:text-lg text-white pb-8">Subscribe to get the lastest blog , new tech , and exclusive news .</p>
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          className="border border-white rounded-md h-full 
            border-r-0 outline-none w-full rounded-r-none px-3 text-white bg-black"
          type="text"
          placeholder="Enter your Email"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full border-black bg-pink-400
            text-white cursor-pointer rounded-md rounded-l-none hover:bg-black"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
