import React, { useState, useEffect } from "react";
import Featured from "./utils/Featured";
import ProfileBox from "./utils/ProfileBox";
import GuitarPic from "../resources/pic/portfolio/guitar.png";
import ManCity from "../resources/pic/portfolio/mancity.png";
import Venue from "../resources/pic/portfolio/venue.png";
import FaceDetect from "../resources/pic/portfolio/facedetect.png";
import Grocery from "../resources/pic/portfolio/grocery.png";

const portfolio = [
  {
    name: "Wave Guitar Shop",
    type: "React",
    image: `${GuitarPic}`,
    skills: "React, MongoDB, Express, Node.js, Redux, Axios",
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
    type: "React",
    image: `${ManCity}`,
    skills: "React, Firebase NoSQL, Node.js",
    description:
      "This website is a MVC model built by React with firebase NoSQL. Complex animation and transitions were implements using React Move, React Reveal and d3-easy, and admin can perform CRUD operations",
    button: [
      {
        demoUrl: "https://m-city-5cc36.firebaseapp.com/",
        github: "https://github.com/xwang985/man-city"
      }
    ]
  },
  {
    name: "Face Detection with AI",
    type: "React",
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
    type: "React",
    image: `${Venue}`,
    skills: "React, HTML, CSS",
    description:
      "This website showcases a pop artist. It used React libraries such as Mateiral-UI, React-Scroll, React-Revel and React-Slick to facilitate page functionalities.",
    button: [
      {
        demoUrl: "http://roasted-tree.surge.sh/",
        github: "https://github.com/xwang985/venue_display"
      }
    ]
  },
  {
    name: "Grocery Shop",
    type: "Angular",
    image: `${Grocery}`,
    skills: "Angular, Typescript, Bootstrap, Firebase NoSQL",
    description:
      "This website was builted with Angular framework and Firebase NoSQL. It implemented features such as template-driven (ngModel) and reactive forms, events in components/directives",
    button: [
      {
        demoUrl: "https://groceryshop-3ed26.firebaseapp.com/",
        github: "https://github.com/xwang985/groceryshop"
      }
    ]
  }
];

const titles = ["All", "React", "Angular"];

const Portfolio = () => {
  const [activeItem, setActiveItem] = useState("All");

  useEffect(() => {
    document.title = "Projects - Joey";
  }, []);

  const displayTitle = () =>
    titles.map(title => (
      <div
        key={title}
        className={`title ${activeItem === title ? "active" : ""}`}
        onClick={() => setActiveItem(title)}
      >
        {title}
      </div>
    ));

  const collectPortfolio = type => {
    if (type === "All") return portfolio;

    let currentPortfolio = [];
    portfolio.forEach(item => {
      if (item.type === activeItem) {
        currentPortfolio.push(item);
      }
    });
    return currentPortfolio;
  };

  const displayPortfolio = () => {
    let currentPortfolio = collectPortfolio(activeItem);

    return currentPortfolio.map(item => (
      <ProfileBox key={item.name} {...item} />
    ));
  };

  return (
    <>
      <Featured>
        <p>My portfolio</p>
      </Featured>
      <div className="portfolio_title">
        <div className="item">{displayTitle()}</div>
      </div>
      {displayPortfolio()}
    </>
  );
};

export default Portfolio;
