import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
import profile2 from "../../assets/images/profile.png";
const Bloog = ({ blog, eventHandelerBookMark, readingTimeHandeler }) => {
  const { title, cover_img, reading_time, author, posted_date, hashtag } = blog;

  return (
    <div className="mb-20 space-y-10">
      <img
        className="w-full mb-8"
        src={cover_img}
        alt={`cover picture of ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex">
          <img src={profile2} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => eventHandelerBookMark(blog)}
            className="ml-3 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-4xl">{title}</h1>
      <p>
        {hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => readingTimeHandeler(reading_time)}
        className="text-red-500 font-bold underline"
      >
        Mark as read
      </button>
    </div>
  );
};
Bloog.propTypes = {
  blog: PropTypes.object.isRequired,
  eventHandelerBookMark: PropTypes.func,
  readingTimeHandeler: PropTypes.func,
};

export default Bloog;
