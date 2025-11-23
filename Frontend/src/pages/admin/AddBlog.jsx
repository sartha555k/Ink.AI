import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { axios } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const editRef = useRef(null);
  const quillRef = useRef(null);
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {};

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);
      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };
      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);
      const { data } = await axios.post("/api/blog/add", formData);

      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle("");
        quillRef.current.root.innerHTML = "";
        setCategory("Startup");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }finally{
      setIsAdding(false)
    }
  };

  useEffect(() => {
    if (!quillRef.current && editRef.current) {
      quillRef.current = new Quill(editRef.current, { theme: "snow" });
    }
  });

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-gray-600 text-black h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded-lg">
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            id="image"
            hidden
            required
          />
        </label>
        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Type here "
          required
          className="w-full 
        max-w-lg mt-2 p-2 border border-gray-600 outline-none rounded"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <p className="mt-4">Sub-Title</p>
        <input
          type="text"
          placeholder="Type here "
          required
          className="w-full 
        max-w-lg mt-2 p-2 border border-gray-600 outline-none rounded"
          onChange={(e) => {
            setSubTitle(e.target.value);
          }}
          value={subTitle}
        />

        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
          <div ref={editRef}></div>
          <button
            onClick={generateContent}
            className="absolute bottom-1 right-2 
          ml-2 text-xs font-bold text-white bg-black  px-4 py-1.5 rounded hover:underline 
          cursor-pointer "
          >
            Generate using AI.
          </button>
        </div>
        <p className="mt-4 "> Blog Catagory</p>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          name="category"
          className="mt-2 px-3 py-2 border text-black 
        border-gray-400 outline-none rounded-lg"
        >
          <option value="">Select Cateogry</option>
          {blogCategories.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
        <div className="flex gap-2 mt-4">
          <p>Publish Now</p>
          <input
            onChange={(e) => setIsPublished(e.target.checked)}
            type="checkbox"
            checked={isPublished}
            className="scale-125 cursor-pointer"
          />
        </div>

        <button
          disabled={isAdding}
          type="submit"
          className="mt-8 w-40 h-10 bg-black text-white 
          rounded-lg cursor-pointer text-sm"
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
