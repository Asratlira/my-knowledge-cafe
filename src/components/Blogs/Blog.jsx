import { useEffect } from "react";
import { useState } from "react";
import Bloog from "../Blog/Bloog";
import PropTypes from "prop-types";

const Blog = ({ eventHandelerBookMark, readingTimeHandeler }) => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs:{blogs.length}</h1>
      {blogs.map((blog) => (
        <Bloog
          key={blog.id}
          blog={blog}
          eventHandelerBookMark={eventHandelerBookMark}
          readingTimeHandeler={readingTimeHandeler}
        ></Bloog>
      ))}
    </div>
  );
};
Blog.propTypes = {
  eventHandelerBookMark: PropTypes.func,
  readingTimeHandeler: PropTypes.func,
};

export default Blog;
