import React from "react";
import { assets } from "../../assets/assets";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  return (
    <tr className="border-y border-gray-400">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${blog.isPublished ? "text-green-600" : "text-red-500"}`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className="px-4 py-2 flex text-xs gap-3">
        <button className="border px-2 py-0.5 mt-1 rounded pointer-cursor">
          {blog.isPublished ? "Published" : "Unpublished"}
        </button>
        <img src={assets.cross_icon} className="w-8 hover:scale-110 transtion-all
        cursor-pointer " />
      </td>
    </tr>
  );
};

export default BlogTableItem;
