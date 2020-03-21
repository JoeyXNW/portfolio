import React, { useEffect } from "react";
import "./portfolio.css";
import Featured from "../utils/featured";
import ProfileBox from "../utils/profileBox";
import GuitarPic from "../../resources/pic/portfolio/guitar.png";
import ManCity from "../../resources/pic/portfolio/mancity.png";
import Venue from "../../resources/pic/portfolio/venue.png";
import FaceDetect from "../../resources/pic/portfolio/facedetect.png";

const porofolio = [
  {
    name: "Wave",
    image: `${GuitarPic}`,
    skills: "React, MongoDB, Express, NodeJS, Redux",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum voluptas molestiae qui illum culpa quos maxime fugiat ullam consectetur, reprehenderit modi esse ab. Voluptas tempore molestias dolor quo labore?",
    button: [
      {
        demoUrl: "https://pure-ocean-49821.herokuapp.com/",
        github: "https://github.com/xwang985/Wave-Guitar-Shop"
      }
    ]
  },
  {
    name: "Manchester City Football",
    image: `${ManCity}`,
    skills: "React, Firebase, NodeJS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum voluptas molestiae qui illum culpa quos maxime fugiat ullam consectetur, reprehenderit modi esse ab. Voluptas tempore molestias dolor quo labore?",
    button: [
      {
        demoUrl: "https://m-city-5cc36.firebaseapp.com/",
        github: "https://github.com/xwang985/man-city"
      }
    ]
  },
  {
    name: "Face Detection",
    image: `${FaceDetect}`,
    skills: "React, PostSQL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum voluptas molestiae qui illum culpa quos maxime fugiat ullam consectetur, reprehenderit modi esse ab. Voluptas tempore molestias dolor quo labore?",
    button: [
      {
        demoUrl: "https://facerecognition-app-jw.herokuapp.com/",
        github: "https://github.com/xwang985/facerecognition"
      }
    ]
  },
  {
    name: "Venue Display",
    image: `${Venue}`,
    skills: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum voluptas molestiae qui illum culpa quos maxime fugiat ullam consectetur, reprehenderit modi esse ab. Voluptas tempore molestias dolor quo labore?",
    button: [
      {
        demoUrl: "http://roasted-tree.surge.sh/",
        github: "https://github.com/xwang985/venue_display"
      }
    ]
  }
];

const displayPortfolio = () =>
  porofolio.map(item => <ProfileBox key={item.name} {...item} />);

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio - Joey";
  }, []);

  return (
    <>
      <Featured background="#bac7a7">
        <p>My portfolio</p>
      </Featured>
      {displayPortfolio()}
    </>
  );
};

export default Portfolio;
