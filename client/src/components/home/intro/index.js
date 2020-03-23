import React from "react";
import profilePic from "../../../resources/pic/joey.JPG";
import SkillBar from "./SkillBar";
import { Fade } from "react-reveal";
import Buttons from "../../utils/Buttons";

const skills = [
  { name: "Python", width: 80 },
  { name: "React", width: 70 },
  { name: "MongoDB", width: 70 },
  { name: "PostgreSQL", width: 70 },
  { name: "JavasSript", width: 70 },
  { name: "CSS", width: 70 },
  { name: "NodeJS", width: 70 },
  { name: "Angular", width: 70 }
];

const showSkills = () =>
  skills.map(skill => (
    <SkillBar key={skill.name} width={skill.width} name={skill.name} />
  ));

const Intro = () => {
  return (
    <div className="intro">
      <Fade left>
        <div className="split_left">
          <div className="left_container">
            <img className="profile" src={profilePic} alt="profile" />
            <h2>Xining (Joey) Wang</h2>
            <h3>Full Stack Developer</h3>
            <p>
              I am a developer based in Montreal, Canada. I have a passion for
              web development and algorithom.
            </p>
            <Buttons
              url="/"
              title="contact me for more detail"
              type="internal"
            />
          </div>
        </div>
      </Fade>
      <div className="split_right">
        <div className="right_container">{showSkills()}</div>
      </div>
    </div>
  );
};

export default Intro;
