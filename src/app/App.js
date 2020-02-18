import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import {
  AboutUs,
  OurFood,
  FoodMenu,
  MainHeader,
  Reviews,
  Contact,
  MenuOverlay
} from "../components";
import copy from "../data/copy.json";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="App-body">
      <Container>
        <MainHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <AboutUs
          bgColor="#7B506F"
          title={copy.pages.ourKitchen.title}
          id="aboutUs"
        >
          {copy.pages.ourKitchen.text}
        </AboutUs>
        <OurFood />
        <FoodMenu />
        <AboutUs bgColor="#1F1A38" title={copy.pages.aboutUs.title} id="">
          {copy.pages.aboutUs.text}
        </AboutUs>
        <Reviews />
        <Contact />
        <MenuOverlay openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default App;
