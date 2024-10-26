import "./App.css";
import Header from "./components/Header/Header";
import Blog from "./components/Blogs/Blog";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks, setbookmarks] = useState([]);
  const [readingTime, setreadingTime] = useState(0);

  const eventHandelerBookMark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setbookmarks(newBookmarks);
  };
  const readingTimeHandeler = (time) => {
    setreadingTime(readingTime + time);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blog
          readingTimeHandeler={readingTimeHandeler}
          eventHandelerBookMark={eventHandelerBookMark}
        ></Blog>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
