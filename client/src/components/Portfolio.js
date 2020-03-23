import React, { useEffect } from "react";
import Featured from "./utils/Featured";
import ProfileBox from "./utils/ProfileBox";
import GuitarPic from "../resources/pic/portfolio/guitar.png";
import ManCity from "../resources/pic/portfolio/mancity.png";
import Venue from "../resources/pic/portfolio/venue.png";
import FaceDetect from "../resources/pic/portfolio/facedetect.png";

const porofolio = [
  {
    name: "Wave Guitar Shop",
    image: `${GuitarPic}`,
    skills: "React, MongoDB, Express, NodeJS, Redux, Axios",
    description:
      "The front-end was built with React while RESTful API was built was Express, Node.js and MongoDB, while Redux was used as state management. User and route authentifications were impleted with JASON web token and HOC with react-router respectively",
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
      "This website is a MVC model built by React with firebase Database. Complex animation and transitions were implements using React Move, React Reveal and d3-easy, and admin can perform CRUD operations",
    button: [
      {
        demoUrl: "https://m-city-5cc36.firebaseapp.com/",
        github: "https://github.com/xwang985/man-city"
      }
    ]
  },
  {
    name: "Face Detection with AI",
    image: `${FaceDetect}`,
    skills: "React, PostgreSQL, bootstrap",
    description:
      "This website is to detect faces upon entering the URL of an Image. It is built with Clarifai API and React framework",
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
      "Used React libraries such as Mateiral-UI, React-Scroll and React-Slick to facilitate page functionalit; Built customer counter components with React-Reveal to support effect",
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
