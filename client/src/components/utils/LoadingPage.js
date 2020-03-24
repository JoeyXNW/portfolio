import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LoadingPage = props => {
  const [opacity, setOpacity] = useState(0);
  const [spacing, setSpacing] = useState(300);

  useEffect(() => {
    if (opacity < 100) {
      const timer = setTimeout(() => {
        setOpacity(opacity + 2);
        setSpacing(spacing - 4);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [opacity]);

  return (
    <NameContainer opacity={opacity} spacing={spacing}>
      {props.children}
    </NameContainer>
  );
};

export default LoadingPage;

const NameContainer = styled.div`
  opacity: ${props => props.opacity * 0.01};
  letter-spacing: ${props => props.spacing * 0.01}vw;
`;
