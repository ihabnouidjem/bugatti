import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Models from "./pages/Models.js";
import Contact from "./pages/Contact.js";
import News from "./pages/News";

//--------------------------------------
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALEDyD3oPUWDQ1sSjH-5-SBU3wEx8jhN8",
  authDomain: "bugatti-f56ad.firebaseapp.com",
  projectId: "bugatti-f56ad",
  storageBucket: "bugatti-f56ad.appspot.com",
  messagingSenderId: "553032756230",
  appId: "1:553032756230:web:4c6459b2f26a69ed2de787",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const modelsRef = collection(db, "models");
const newsRef = collection(db, "news");
//------------------------------------

function App() {
  const [fmodels, setfModels] = useState([]);
  const [fnews, setfNews] = useState([]);

  //--------------------------------

  // getDocs(modelsRef).then((snapshot) => {
  //   const models = [];
  //   snapshot.docs.forEach((doc) => {
  //     fmodels.push({ ...doc.data(), id: doc.id });
  //   });
  //   // setfModels(fmodels);
  // });
  // getDocs(newsRef).then((snapshot) => {
  //   snapshot.docs.forEach((doc) => {
  //     fnews.push({ ...doc.data(), id: doc.id });
  //   });
  // });
  useEffect(() => {
    onSnapshot(newsRef, (snapshot) => {
      const news = [];
      snapshot.docs.forEach((doc) => {
        news.push({ ...doc.data(), id: doc.id });
      });
      setfNews(news);
    });
    onSnapshot(modelsRef, (snapshot) => {
      const models = [];
      snapshot.docs.forEach((doc) => {
        models.push({ ...doc.data(), id: doc.id });
      });
      setfModels(models);
    });
  }, []);

  //----------------------------------
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home fnews={fnews} fmodels={fmodels} />} />
        <Route path="/models" element={<Models fmodels={fmodels} />} />
        <Route path="/news" element={<News fnews={fnews} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
