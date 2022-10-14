import React, { useEffect, useState, useRef } from "react";
import "../styles/models.css";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

function Models({ fmodels }) {
  //--------------------------
  const [windowWidth, setWindowWidth] = useState();
  // const [modelsPos, setModelspos] = useState();
  const modelsRef = useRef(null);
  //----------------------
  // const scrollx = () => {
  //   // setModelspos(modelsRef.current.scrollLeft);
  //   setModelspos(windowWidth / 2 + modelsRef.current.scrollLeft);

  //   console.log(windowWidth);
  // };

  const scrollLeft = () => {
    if (windowWidth < 500) {
      modelsRef.current.scrollLeft -= 200;
    } else {
      modelsRef.current.scrollLeft -= 330;
    }
  };

  const scrollRight = () => {
    if (windowWidth < 500) {
      modelsRef.current.scrollLeft += 200;
    } else {
      modelsRef.current.scrollLeft += 330;
    }
  };

  useEffect(() => {
    setWindowWidth(window.pageXOffset);

    //  window.addEventListener("scroll", scrollx);
    //  scrollx();

    //  window.removeEventListener("scroll", scrollx);
    //  setWindowWidth(modelsRef.current.offsetWidth);
  });
  return (
    <div className="models element-margin">
      <h1 className="models-header">MODELS</h1>
      <button className="models-btn-left">
        <i onClick={scrollLeft}>
          <VscChevronLeft />
        </i>
      </button>
      <div
        ref={modelsRef}
        className="models-content snaps-inline"
        /* onScroll={scrollx}*/
      >
        {windowWidth < 500
          ? fmodels.map((fmodel) => {
              return (
                <div id={fmodel.id} key={fmodel.id} className={"single-model"}>
                  <div
                    className={
                      // modelsPos > 0.8 * xmin && modelsPos < 0.8 * xmax
                      //   ? "transition-500 scale"
                      /* : */ "transition-500"
                    }
                  >
                    <div className={"models-content-img"}>
                      <img src={fmodel.imgsrc} loading="lazy" />
                    </div>
                    <p className={"models-content-txt"}>{fmodel.model}</p>
                  </div>
                </div>
              );
            })
          : fmodels.map((fmodel) => {
              return (
                <div key={fmodel.id} className={"single-model"}>
                  <div
                    className={
                      /* modelsPos > xmin && modelsPos < xmax
                        ? "transition-500 scale"
                       :*/ "transition-500"
                    }
                  >
                    <div className={"models-content-img"}>
                      <img src={fmodel.imgsrc} loading="lazy" />
                    </div>
                    <p className={"models-content-txt"}>{fmodel.model}</p>
                  </div>
                </div>
              );
            })}
      </div>
      <button className="models-btn-right">
        <i onClick={scrollRight}>
          <VscChevronRight />
        </i>
      </button>
    </div>
  );
}

export default Models;
