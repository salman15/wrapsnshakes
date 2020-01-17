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
  HeaderIconContainer,
  Column,
  SpacerImage,
  ColumnText,
  Wrapper,
  FoodImage,
  InnerWrapper,
  MenuProduct,
  MenuList,
  MenuListItem,
  CompanyIcon,
  HeaderSubTitle,
  HeaderContentWrapper,
  ImageBlockContainer,
  ImageBlock,
  ImageBlockTwist
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
        <Header
        //bgImage={copy.pages.landing.bgImage}
        >
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
              left={1}
              bottom={1}
              width={200}
            />
            <HeaderIcon
              src={copy.pages.landing.ingredients[2]}
              left={300}
              bottom={"initial"}
              width={250}
            />
            <HeaderIcon src={copy.pages.landing.ingredients[0]} />
            <HeaderIcon
              src={copy.pages.landing.ingredients[3]}
              right={300}
              bottom={"initial"}
              width={250}
            />
            <HeaderIcon
              src={copy.pages.landing.ingredients[4]}
              right={15}
              bottom={1}
              width={200}
            />
          </HeaderIconContainer>
        </Header>
        <Wrapper bgColor="transparent" width={"1149px"} height={"80vh"}>
          <ContentBlock
            color="#fff"
            direction="row"
            spacing="space-between"
            bgColor="#7B506F"
          >
            <Column width={40} spacing="center">
              <h2>About us</h2>
            </Column>
            <SpacerImage src={copy.general.icons.spacerWhite} />
            <Column width={50} spacing="center">
              <ColumnText>
                “De Libanese keuken is een keuken van de zon en een keuken uit
                het hart”. De kleuren weerspiegelen de 1001 zonnige landschappen
                en de diversiteit roept de overvloedige Libanese vrijgevigheid
                en gastvrijheid op.
              </ColumnText>
            </Column>
          </ContentBlock>
        </Wrapper>
        <Wrapper bgColor="rgba(247,244,244,0.49)" height="100vh">
          <Wrapper bgColor="transparent" width={"1149px"}>
            <h1>Our Food</h1>
            <Wrapper bgColor="transparent" direction="row">
              <Column width={50}>
                <ImageBlockTwist>
                  <ImageBlockContainer spacing="flex-end">
                    <ImageBlock src={copy.pages.food.second} />
                  </ImageBlockContainer>
                  <Column>
                    <ImageBlockContainer>
                      <ImageBlock src={copy.pages.food.first} />
                    </ImageBlockContainer>
                    <ImageBlockContainer>
                      <ImageBlock src={copy.pages.food.third} />
                    </ImageBlockContainer>
                  </Column>
                </ImageBlockTwist>
              </Column>
              <Column width={50} />
            </Wrapper>
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
        <Wrapper bgColor="transparent" width={"1149px"}>
          <Wrapper bgColor="transparent" width={100} direction="row">
            <Column width={50}>
              <Wrapper
                bgColor="transparent"
                width={100}
                direction="row"
                spacing="space-between"
              >
                <CompanyIcon src={copy.pages.reviews.icons.google} />
                <CompanyIcon src={copy.pages.reviews.icons.foodora} />
              </Wrapper>
              <Wrapper
                bgColor="transparent"
                width={100}
                direction="row"
                spacing="space-between"
              >
                <CompanyIcon src={copy.pages.reviews.icons.uber} />
                <CompanyIcon src={copy.pages.reviews.icons.thuisbezorgd} />
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
        <Wrapper bgColor="transparent" width={"1149px"}>
          <h1>Contact</h1>
        </Wrapper>
      </Container>
    </div>
  );
};

export default App;
