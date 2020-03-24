import React, { useEffect, useState, useRef } from "react";
import { Slide } from "react-reveal";

const SkillBar = ({ name }) => {
  const [start, setStart] = useState(0);
  const end = 100;
  const didMountRef = useRef(false);

  const width = () => {
    if (start < end) {
      setStart(start + 1);
    }
  };

  useEffect(() => {
    if (didMountRef.current) {
      const timer = setTimeout(width, 30);
      return () => clearTimeout(timer);
    } else didMountRef.current = true;
  });

  return (
    <Slide right onReveal={width}>
      <div className="skillContainer">
        <div className="name">{name}</div>
        <div className="skill" style={{ width: `${start}%` }}></div>
        {/* <div className="percent">{width}%</div> */}
      </div>
    </Slide>
  );
};

export default SkillBar;
