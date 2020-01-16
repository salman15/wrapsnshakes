import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { ContentBlock, BurgerMenu } from "../components";
import copy from "../data/copy.json";
import { toCurrency } from "../utils/calculations";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 64px;
  background-color: #ffffff9e;
  border-radius: 62px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MenuList = styled.ul`
  border-bottom: 2px solid #424242;
  width: 33%;
`;

const MenuListItem = styled.li`
  font-family: Roboto;
  font-size: 18px;
  margin: 16px 0;
`;

const MenuProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-right: 32px;
`;

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => (props.width ? props.width + "%" : "100%")};
  height: 100%;
  flex-direction: column;
`;

const Ball = styled.span`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

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
`;

const HeaderTitle = styled.h1`
  font-weight: 100;
  font-size: 200px;
`;

const HeaderIcon = styled.img`
  position: absolute;
  bottom: -100px;
  object-fit: cover;
  width: 200px;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  width: 80%;
`;

const SpacerImage = styled.img``;

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="App-body">
      <Container>
        <Header bgImage={copy.pages.landing.bgImage}>
          <HeaderNav>
            <BurgerMenu open={openMenu} setOpen={setOpenMenu} />
          </HeaderNav>
          <HeaderTitle>
            {copy.pages.landing.title}
          </HeaderTitle>
          <HeaderIcon src={copy.pages.landing.logo} />
        </Header>
        <ContentBlock
          color="#fff"
          direction="row"
          spacing="space-between"
          bgColor="#7B506F"
        >
          <Column width={40}>
            <h2>About us</h2>
          </Column>
          <SpacerImage src={copy.general.icons.spacerWhite} />
          <Column width={50}>
            <p>
              “De Libanese keuken is een keuken van de zon en een keuken uit het
              hart”. De kleuren weerspiegelen de 1001 zonnige landschappen en de
              diversiteit roept de overvloedige Libanese vrijgevigheid en
              gastvrijheid op.
            </p>
          </Column>
        </ContentBlock>
        <ContentBlock
          bgImage={copy.pages.menu.bgImage}
          subTitle={copy.pages.menu.subTitle}
          color="#292929"
        >
          <Wrapper>
            <h2>
              {copy.pages.menu.subTitle}
            </h2>
            <InnerWrapper>
              {copy.pages.menu.menuItems.map((item, index) => {
                return (
                  <MenuList key={index}>
                    <h3>
                      {item.title}
                    </h3>

                    {item.products.map((item, index) => {
                      return (
                        <MenuProduct>
                          <MenuListItem>
                            {item.product}
                          </MenuListItem>
                          <MenuListItem>
                            {toCurrency(item.price)}
                          </MenuListItem>
                        </MenuProduct>
                      );
                    })}
                  </MenuList>
                );
              })}
            </InnerWrapper>
          </Wrapper>
        </ContentBlock>
        <ContentBlock color="#292929" direction="row" spacing="space-between">
          <Column width={40}>
            <h2>About us</h2>
          </Column>
          <Ball />
          <Column width={50}>
            <p>
              “De Libanese keuken is een keuken van de zon en een keuken uit het
              hart”. De kleuren weerspiegelen de 1001 zonnige landschappen en de
              diversiteit roept de overvloedige Libanese vrijgevigheid en
              gastvrijheid op.
            </p>
          </Column>
        </ContentBlock>
      </Container>
    </div>
  );
};

export default App;
