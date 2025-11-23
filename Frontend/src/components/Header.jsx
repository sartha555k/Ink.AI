import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";

const Header = () => {
  const { input, setInput } = useAppContext();
  const inputRef = useRef();
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = ()=>{
    setInput('');
    inputRef.current.value = ''
  }
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div
          className="inline-flex items-center
            justify-center gap-4 px-6 py-1.5 mb-4 border rounded-full
            text-sm font-bold"
        >
          <p className="text-white text-2xl">Where AI Meets Words</p>
        </div>
        <h1
          className="text-3xl sm:text-6xl font-semibold
        sm:leading-16 text-white"
        >
          Next-Gen Blogging with Built-In <br />{" "}
          <span className="text-pink-300">AI Intelligence</span>
        </h1>
        <p
          className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs
        text-white text-lg"
        >
          Generate and publish high-quality blogs using AI-driven tools. An
          integrated admin panel lets you oversee all posts, categories, and
          user activity.
        </p>
        <form
          onSubmit={onsubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75
        mx-auto border border-gray-300 rounded overflow-hidden bg-black"
        >
          <input
            ref={inputRef}
            className="w-full pl-4 outline-none"
            type="text"
            placeholder="Search for text"
            required
          />
          <button
            className="text-black font-bold px-8 py-2 m-1.5 rounded hover:scale-110
            transition-all cursor-pointer bg-pink-400"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="text-center">
        {
          input&&
          <button
          onClick={onClear}
            className="text-white border font-light 
        text-xs py-1 px-3 rounded-sm cursor-pointer"
          >
            X Clear Search
          </button>
        }
      </div>
    </div>
  );
};

export default Header;
