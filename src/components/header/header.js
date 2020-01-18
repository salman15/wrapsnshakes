import React from "react";
import styled from "styled-components";
import { BurgerMenu, Button } from "../";
import copy from "../../data/copy.json";

export const MainHeader = ({ openMenu, setOpenMenu }) => {
  return (
    <Header>
      <HeaderNav>
        <Button>Reserveer</Button>
        <BurgerMenu open={openMenu} setOpen={setOpenMenu} />
      </HeaderNav>
      <HeaderContentWrapper>
        <HeaderTitle>
          {copy.pages.landing.title}
        </HeaderTitle>
        <HeaderSubTitle>
          Fresh wraps,and crazy shakes! Visit us at the Markthal Rotterdam
        </HeaderSubTitle>
      </HeaderContentWrapper>
      <HeaderIconContainer>
        <HeaderIcon
          src={copy.pages.landing.ingredients[1]}
          left={-60}
          bottom={-100}
          width={200}
        />
        <HeaderIcon
          src={copy.pages.landing.ingredients[2]}
          left={-60}
          bottom={-150}
          width={250}
        />
        <HeaderIcon src={copy.pages.landing.ingredients[0]} />
        <HeaderIcon
          src={copy.pages.landing.ingredients[3]}
          right={-60}
          bottom={-150}
          width={250}
        />
        <HeaderIcon
          src={copy.pages.landing.ingredients[4]}
          right={-60}
          bottom={-100}
          width={200}
        />
      </HeaderIconContainer>
    </Header>
  );
};

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-image: ${props => "url(" + props.bgImage + ")"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 100%;
  min-height: 70vh;
  margin-bottom: 200px;
  &:before {
    content: " ";
    display: flex;
    position: absolute;
    width: calc(100% + 1000px);
    height: 140vh;
    bottom: 0px;
    background-color: #dd99bb;
    border-radius: 50%;
  }
`;

const HeaderTitle = styled.h1`
  font-weight: 100;
  font-size: 200px;
  z-index: 1;
  margin-bottom: 0;
`;

const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

const HeaderSubTitle = styled.p`
  font-weight: 200;
  font-size: 32px;
  z-index: 1;
  font-style: italic;
`;

const HeaderIcon = styled.img`
  position: relative;
  bottom: ${props => (props.bottom ? props.bottom + "px" : "-200px")};
  left: ${props => (props.left ? props.left + "px" : "initial")};
  right: ${props => (props.right ? props.right + "px" : "initial")};
  object-fit: cover;
  width: ${props => (props.width ? props.width + "px" : "400px")};
`;

const HeaderIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  /*width: 80%;*/
  width: 1149px;
  z-index: 1;
  margin: 24px 0;
`;