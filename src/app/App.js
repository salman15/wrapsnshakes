import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import {
  AboutUs,
  OurFood,
  FoodMenu,
  MainHeader,
  Reviews,
  Contact
} from "../components";
import copy from "../data/copy.json";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="App-body">
      <Container>
        <MainHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <AboutUs bgColor="#7B506F" title="About Us">
          {copy.pages.aboutUs.text}
        </AboutUs>
        <OurFood />
        <FoodMenu />
        <AboutUs bgColor="#1F1A38" title="About Us">
          {copy.pages.aboutUs.text}
        </AboutUs>
        <Reviews />
        <Contact />
      </Container>
    </div>
  );
};

export default App;
