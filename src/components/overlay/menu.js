import React from "react";
import styled from "styled-components";

export const MenuOverlay = ({ openMenu, setOpenMenu }) => {
  return (
    <Overlay show={openMenu}>
      <MenuItem href="#aboutUs" onClick={() => setOpenMenu(false)}>
        About us
      </MenuItem>
      <MenuItem href="#ourFood" onClick={() => setOpenMenu(false)}>
        Our Food
      </MenuItem>
      <MenuItem href="#ourMenu" onClick={() => setOpenMenu(false)}>
        Our Menu
      </MenuItem>
      {/* <MenuItem href="#reviews" onClick={() => setOpenMenu(false)}>
        Reviews
      </MenuItem> */}
      <MenuItem href="#contact" onClick={() => setOpenMenu(false)}>
        Contact us
      </MenuItem>
    </Overlay>
  );
};

const MenuItem = styled.a`
  margin: 32px 0;
  color: white;
  text-decoration: none;
`;

const Overlay = styled.div`
  display: ${props => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000094;
  z-index: 100;
`;
