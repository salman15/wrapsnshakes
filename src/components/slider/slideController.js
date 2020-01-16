import React from "react";
import styled from "styled-components";

const Control = styled.div`
  height: 26px;
  width: 26px;
  border: 3px solid #292929;
  border-radius: 50%;
  background-color: ${props => (props.current ? "#292929" : "transparent")};
`;

export const SlideController = ({ active, setActive, index }) => {
  return (
    <Control current={active === index} onClick={() => setActive(index)} />
  );
};
