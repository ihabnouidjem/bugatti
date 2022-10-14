import React from "react";
import "../styles/newspost.css";

function Newspost({ fnews }) {
  return (
    <>
      {/* <div className="newspost-img">
        <img src="https://www.auto-data.net/images/f107/Bugatti-Bolide.jpg" />
      </div> */}
      <div className="newspost-styles"></div>
      <div className="newspost">
        {fnews.map((article) => {
          const { id, author, post, details, date, title } = article;
          return (
            <div key={id} className="newsarticle">
              <h3 className="newsarticle-title">{title}</h3>
              <p className="newsarticle-post">{post}</p>
              <p className="newsarticle-details">{details}</p>
              <div className="news-src">
                <p className="news-src-author">{author}</p>
                <p className="news-src">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Newspost;
