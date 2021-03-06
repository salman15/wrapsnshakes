import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInBottom = keyframes`
from {
    opacity: 0;
    top: 10px;
  }
  to {
    opacity: 1;
    top: 0px;
  }
`;

const Block = styled.div`
  box-shadow: 0 2px 40px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: ${props => (props.spacing ? props.spacing : "center")};
  /*width: 80%;*/
  width: 1149px;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  border-radius: 62px;
  padding: 20px;
  background-image: ${props => "url(" + props.bgImage + ")"};
  background-color: ${props => (props.bgColor ? props.bgColor : "#D8D8D8")};
  background-size: 150%;
  background-position: center;
  margin: 32px 0;
  min-height: 400px;
  color: ${props => (props.color ? props.color : "white")};
  max-width: 100%;
  h1 {
    position: relative;
    font-size: 280px;
    font-style: italic;
    animation: ${fadeInBottom} 1s ease;
    width: 60%;
    margin: 0;
    font-weight: 100;
    text-align: center;
  }
  h2 {
    font-size: 124px;
    font-weight: 100;
    margin: 0;
    @media (max-width: 475px) {
      font-size: 80px;
    }
  }
  h3 {
    font-weight: 100;
    font-size: 60px;
    margin: 40px 0;
  }
  @media (max-width: 475px) {
    flex-direction: column;
  }
`;

export const ContentBlock = ({
  title,
  bgImage,
  children,
  color,
  bgColor,
  direction,
  spacing
}) => {
  return (
    <Block
      bgImage={bgImage}
      bgColor={bgColor}
      color={color}
      direction={direction}
      spacing={spacing}
    >
      {title &&
        <h1>
          {title}
        </h1>}

      {children}
    </Block>
  );
};
