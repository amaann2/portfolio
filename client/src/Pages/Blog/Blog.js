import React, { useEffect } from "react";
import BlogCard from "../../Components/Blog-Card/BlogCard";
import "./Blog.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../Redux/Blog/blogAction";
import { TailSpin } from "react-loader-spinner";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);
  console.log(blogs);
  return (
    <div className="container">

      <div className="Blog">
        {loading ? (
          <TailSpin
            height="20"
            width="20"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          blogs && blogs.map((blog) => <BlogCard blog={blog} />)
        )}

      </div>
    </div>
  );
};

export default Blog;
