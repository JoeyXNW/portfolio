import React, { useEffect } from "react";
import Intro from "./intro";
import Featured from "../utils/featured";

const Home = () => {
  useEffect(() => {
    document.title = "Joey - a Full Stack Developer";
  }, []);

  return (
    <>
      <Featured background="var(--lightGreen)">
        <div className="name">Joey</div>
        <div className="description">a web developer</div>
      </Featured>
      <Intro />
    </>
  );
};

export default Home;
