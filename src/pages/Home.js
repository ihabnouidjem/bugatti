import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Models from "../components/Models";
import News from "../components/News";
import Social from "../components/Social";
import Quote from "../components/Quote";
import Footer from "../components/Footer";

function Home({ fmodels, fnews }) {
  return (
    <div className="home">
      <div className="home-header">
        <Header page={"Home"} />
      </div>
      <main className="home-main">
        <Banner fmodels={fmodels} />
        <Models fmodels={fmodels} />
        <News fnews={fnews} />
        <Social />
        <Quote />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
