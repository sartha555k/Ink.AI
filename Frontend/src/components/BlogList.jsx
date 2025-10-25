import React, { useState } from "react";
import { blogCategories } from "../assets/assets";
import {motion as Motion} from "motion/react"
import { blog_data } from "../assets/assets";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div className="relative " key={item}>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-300 
                ${menu === item && 'text-black px-4 pt-0.5'}`}
            >
              {item}
              {menu === item && (
                <Motion.div
                layoutId="underline"
                transition={{type:'spring',
                    stiffness:500,
                    damping:30
                }}

                  className="absolute left-0 
                    right-0 top-0 h-7 -z-1 bg-gray-400 rounded-full"
                ></Motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
      gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data.filter((blog)=>menu === "All" ? true : blog.category === menu)
      .map((blog)=><BlogCard key={blog._id} blog={blog}/>) }</div>
    </div>
  );
};

export default BlogList;
