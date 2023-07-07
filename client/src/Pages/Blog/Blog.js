import React, { useEffect } from "react";
import BlogCard from "../../Components/Blog-Card/BlogCard";
import "./Blog.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../Redux/Blog/blogAction";
const Blog = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);
  console.log(blogs);
  return (
    <div className="Blog">
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Blog;
