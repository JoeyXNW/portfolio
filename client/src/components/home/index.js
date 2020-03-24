import React, { useEffect, useState } from "react";
import Intro from "./intro";
import LoadingPage from "../utils/LoadingPage";

const Home = () => {
  useEffect(() => {
    document.title = "Joey - a Full Stack Developer";
  }, []);

  return (
    <>
      <LoadingPage>
        <div className="featured">
          <div className="page_name back_name">
            <div className="firstName">Xining</div>
            <div className="lastName">wang</div>
          </div>
          <div className="description back_name">a web developer</div>
        </div>
      </LoadingPage>

      <Intro />
    </>
  );
};

export default Home;
