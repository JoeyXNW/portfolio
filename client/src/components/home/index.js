import React, { Component } from "react";
import Intro from "./intro";
import Featured from "../utils/featured";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Featured background="var(--lightGreen)">
          <div className="name">Joey</div>
          <div className="description">a web developer</div>
        </Featured>
        <Intro />
      </>
    );
  }
}

export default Home;
