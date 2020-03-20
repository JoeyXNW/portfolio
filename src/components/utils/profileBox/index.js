import React from "react";
import "./profileBox.css";
import Buttons from "../buttons";
import { Slide } from "react-reveal";

const ProfileBox = props => {
  const { name, skills, description, image, button } = props;
  return (
    <div className="profile_box">
      <div className="portfolio_container">
        <Slide bottom>
          <div className="left">
            <div className="left_container">
              <h2>{name}</h2>
              <p>{skills}</p>
              <p>{description}</p>
              <Buttons url={button[0].demoUrl} title="View Demo" />
              <Buttons url={button[0].github} title="View Source Code" />
            </div>
          </div>
        </Slide>
        <Slide bottom>
          <div className="right">
            <div className="right_container">
              <img className="image" src={image} alt="profilePic" />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ProfileBox;
