import React from "react";
import styled from "styled-components";
import "./App.css";
import { ContentBlock } from "../components";
import copy from "../data/copy.json";
import { toCurrency } from "../utils/calculations";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 64px;
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

const App = () => {
  return (
    <div className="App-body">
      <Container>
        <ContentBlock
          title={copy.pages.landing.title}
          bg={copy.pages.landing.bg}
          bgImage={copy.pages.landing.bgImage}
        />
        <ContentBlock
          //title={copy.pages.landing.title}
          bg={copy.pages.landing.bg}
          bgImage={copy.pages.firstImage.bgImage}
        />
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
      </Container>
    </div>
  );
};

export default App;
