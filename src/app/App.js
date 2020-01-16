import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import {
  ContentBlock,
  BurgerMenu,
  Slider,
  Header,
  HeaderNav,
  Button,
  HeaderTitle,
  HeaderIcon,
  Column,
  SpacerImage,
  ColumnText,
  Wrapper,
  FoodImage,
  InnerWrapper,
  MenuProduct,
  MenuList,
  MenuListItem
} from "../components";
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

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="App-body">
      <Container>
        <Header bgImage={copy.pages.landing.bgImage}>
          <HeaderNav>
            <Button>Reserveer</Button>
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
            <ColumnText>
              “De Libanese keuken is een keuken van de zon en een keuken uit het
              hart”. De kleuren weerspiegelen de 1001 zonnige landschappen en de
              diversiteit roept de overvloedige Libanese vrijgevigheid en
              gastvrijheid op.
            </ColumnText>
          </Column>
        </ContentBlock>
        <Wrapper bgColor="transparent" width={80}>
          <h1>Our Food</h1>
          <Wrapper bgColor="transparent" direction="row">
            <Column width={50}>
              <FoodImage src={copy.pages.food.first} />
            </Column>
            <Column width={50}>
              <FoodImage src={copy.pages.food.second} />
              <FoodImage src={copy.pages.food.third} />
            </Column>
          </Wrapper>
        </Wrapper>
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
                        <MenuProduct key={index}>
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
        <ContentBlock bgColor="#1F1A38" direction="row" spacing="space-between">
          <Column width={40}>
            <h2>About us</h2>
          </Column>
          <SpacerImage src={copy.general.icons.spacerWhite} />
          <Column width={50}>
            <ColumnText>
              “De Libanese keuken is een keuken van de zon en een keuken uit het
              hart”. De kleuren weerspiegelen de 1001 zonnige landschappen en de
              diversiteit roept de overvloedige Libanese vrijgevigheid en
              gastvrijheid op.
            </ColumnText>
          </Column>
        </ContentBlock>
        <Wrapper bgColor="transparent" width={80}>
          <Wrapper bgColor="transparent" width={100} direction="row">
            <Column width={50}>
              <Wrapper bgColor="transparent" width={100}>
                hi
              </Wrapper>
              <Wrapper bgColor="transparent" width={100}>
                <h2>Reviews</h2>
              </Wrapper>
            </Column>
            <Column width={50}>
              <ContentBlock
                bgColor="#D8D8D8"
                color="#292929"
                spacing="space-between"
              >
                <h2>
                  {copy.pages.reviews.title}
                </h2>
                <SpacerImage src={copy.general.icons.spacer} />
                <Slider data={copy.pages.reviews.reviews} />
              </ContentBlock>
            </Column>
          </Wrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default App;
