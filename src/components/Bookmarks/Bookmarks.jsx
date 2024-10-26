import PropTypes from "prop-types";
import Bookmark from "../bookmark/bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2">
      <div>
        <h1 className="text-4xl">reading time:{readingTime}</h1>
      </div>
      <h1 className="text-3xl text-center">
        Bookmarked blogs :{bookmarks.length}
      </h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmark: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
