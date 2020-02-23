import React from "react";
import styled from "styled-components";
import { toCurrency } from "../../utils/calculations";
import { Wrapper, InnerWrapper, MobilePadding } from "..";
import copy from "../../data/copy.json";

export const FoodMenuPDF = () => {
  return (
    <Wrapper
      color="#292929"
      width="100%"
      margin="0 0 0 0"
      id="ourMenu"
      bgImage="/assets/images/backgrounds/shakes-bg.png"
    >
      <MobilePadding>
        <Wrapper
          color="#292929"
          direction="column"
          spacing="space-between"
          position="flex-start"
          borderRadius="20px"
          padding="30"
          margin="30px"
          width="initial"
          boxShadow="0 2px 40px 4px rgba(0,0,0,0.5)"
          bgColor="transparent"
        >
          <MenuTitle>
            {copy.pages.menu.subTitle}
          </MenuTitle>
          <Wrapper
            color="#292929"
            direction="row"
            spacing="space-between"
            position="flex-start"
            width="1149px"
            bgColor="transparent"
          >
            <InnerWrapper width={40}>
              {copy.pages.menu.menuItems.map((item, index) => {
                return (
                  <MenuList key={index}>
                    <MenuItemTitle>
                      {item.title}
                    </MenuItemTitle>

                    {item.products.map((item, index) => {
                      return (
                        <MenuProduct key={index}>
                          <MenuListItem>
                            <MenuListItemProduct>
                              {item.product.toUpperCase()}
                            </MenuListItemProduct>
                            <MenuListItemProductDesc>
                              {item.description.toUpperCase()}
                            </MenuListItemProductDesc>
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
            <InnerWrapper width={40}>
              {copy.pages.menu.menuItems2.map((item, index) => {
                return (
                  <MenuList key={index}>
                    <MenuItemTitle>
                      {item.title}
                    </MenuItemTitle>

                    {item.products.map((item, index) => {
                      return (
                        <MenuProduct key={index}>
                          <MenuListItem>
                            <MenuListItemProduct>
                              {item.product.toUpperCase()}
                            </MenuListItemProduct>
                            <MenuListItemProductDesc>
                              {item.description.toUpperCase()}
                            </MenuListItemProductDesc>
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
              <Logo src="/assets/images/logo512.png" />
            </InnerWrapper>
          </Wrapper>
        </Wrapper>
      </MobilePadding>
    </Wrapper>
  );
};

const MenuTitle = styled.h1`
  font-size: 124px;
  font-style: italic;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  @media (max-width: 475px) {
    margin: 0;
  }
`;

const MenuItemTitle = styled.h3`
  margin: 16px 0;
  font-size: 36px;
  @media (max-width: 475px) {
    font-size: 32px;
  }
`;

const MenuList = styled.ul`
  position: relative;
  z-index: 2;
  border-bottom: 2px solid #424242;
  width: 100%;
  margin: 24px 16px;
  padding: 24px 0;
`;

const MenuListItem = styled.li`
  font-family: Roboto;
  font-size: 18px;
  margin: 16px 0;
`;

const MenuListItemProduct = styled.p`
  font-family: Roboto;
  font-size: 18px;
  margin: 16px 0;
`;

const MenuListItemProductDesc = styled.p`
  font-family: Roboto;
  font-size: 12px;
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
const Logo = styled.img`
  margin: 150px 0;
  z-index: 2;
  width: 100%;
  @media (max-width: 475px) {
    display: none;
  }
`;
