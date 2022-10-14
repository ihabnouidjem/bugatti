import React, { useEffect, useState } from "react";
import "../styles/news.css";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

function News({ fnews }) {
  const [currentPost, setCurrentPost] = useState();
  useEffect(() => {
    if (fnews && !currentPost) {
      setCurrentPost(fnews[0]);
    }
  });
  const nextPost = () => {
    if (fnews.indexOf(currentPost) + 1 == fnews.length) {
      setCurrentPost(fnews[0]);
    } else {
      setCurrentPost(fnews[fnews.indexOf(currentPost) + 1]);
    }
  };
  const previousePost = () => {
    if (fnews.indexOf(currentPost) == 0) {
      setCurrentPost(fnews[fnews.length - 1]);
    } else {
      setCurrentPost(fnews[fnews.indexOf(currentPost) - 1]);
    }
  };
  return (
    <div className="news element-margin">
      <h1 className="news-header">NEWS</h1>
      <button className="news-btn-left">
        <i onClick={previousePost}>
          <VscChevronLeft />
        </i>
      </button>
      <div className="news-post">
        <div className="news-post-txt">
          <p>{currentPost ? currentPost.post : ""}</p>
        </div>
        <div className="news-post-img">
          <img loading="lazy" src={currentPost ? currentPost.url : ""} />
        </div>
      </div>
      <button className="news-btn-Right">
        <i onClick={nextPost}>
          <VscChevronRight />
        </i>
      </button>
    </div>
  );
}

export default News;
