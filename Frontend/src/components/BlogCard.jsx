import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();
  return (
    <div
      className="w-full rounded-lg overflow-hidden shadow hover:scale-120
    hover:shadow-primary/25 duration-300 cursor-pointer bg-black"
      onClick={() => navigate(`/blog/${_id}`)}
    >
      <img src={image} alt="" className="aspect-video" />
      <span
        className="ml-5 mt-5 px-3 py-1 inline-block rounded-full 
        text-primary text-xs bg-pink-400 text-black"
      >
        {category}
      </span>
      <div className="p-5 ">
        <h5 className="mb-2 font-medium text-white">{title}</h5>
        <p className="mb-2 text-xs text-white" dangerouslySetInnerHTML={{"__html" : description.slice(0, 80)}}></p>
      </div>
    </div>
  );
};

export default BlogCard;
