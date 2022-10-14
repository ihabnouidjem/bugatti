import React from "react";
import Header from "../components/Header";
import Newspost from "../components/Newspost";

function News({ fnews }) {
  return (
    <div>
      <Header page="News" />
      <Newspost fnews={fnews} />
    </div>
  );
}

export default News;
