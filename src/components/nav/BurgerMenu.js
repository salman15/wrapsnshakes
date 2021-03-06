import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const BurgerMenu = ({ setOpen, open }) => {
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <Burger open={open} />
    </Container>
  );
};

const Container = styled.div`
  position: ${props => (props.open ? "fixed" : "relative")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 40px;
  cursor: pointer;
  background-color: #212121;
  margin: 10px 16px;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  z-index: 101;

  @media (max-width: 475px) {
    position: fixed;
    right: 0px;
  }
`;
const Burger = styled.div`
  background-color: white;
  height: 4px;
  width: ${props => (props.open ? "20px" : "28px")};
  transform: ${props => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
  transition: all 0.2s ease;
  border-radius: 50px;

  &:before {
    display: block;
    content: '';
    position: relative;
    top: ${props => (props.open ? 0 : "-10px")};
    background-color: white;
    height: 4px;
    width: 20px;
    margin: 0 auto;
    transform: ${props => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
    transition: all 0.2s ease;
    border-radius: 50px;
  }
  &:after {
    display: block;
    content: '';
    position: relative;
    top: 5px;
    background-color: white;
    height: 4px;
    width: 20px;
    margin: 0 auto;
    opacity: ${props => (props.open ? 0 : 1)};
    transition: all 0.2s ease;
    border-radius: 50px;
  }
`;

BurgerMenu.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool
};
