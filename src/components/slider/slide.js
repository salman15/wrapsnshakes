import React from "react";
import styled from "styled-components";

const SlideWrapper = styled.div`
  position: ${props => (props.active ? "relative" : "absolute")};
  left: ${props => (props.left ? "-1000px" : "initial")};
  right: ${props => (props.right ? "-1000px" : "initial")};
  transition: all 1s ease;
`;

export const Slide = ({ children, active, index }) => {
  return (
    <SlideWrapper
      left={active > index}
      right={active < index}
      active={active === index}
    >
      {children}
    </SlideWrapper>
  );
};
