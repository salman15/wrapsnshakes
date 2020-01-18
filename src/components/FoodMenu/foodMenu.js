import React from "react";
import styled from "styled-components";
import { toCurrency } from "../../utils/calculations";
import { Wrapper, InnerWrapper, MobilePadding } from "..";
import copy from "../../data/copy.json";

export const FoodMenu = () => {
  return (
    <Wrapper color="#292929" width="1149px" margin="300px 0 0 0" id="ourFood">
      <MobilePadding>
        <MenuTitle>
          {copy.pages.menu.subTitle}
        </MenuTitle>
        <Wrapper
          color="#292929"
          direction="row"
          spacing="space-between"
          position="flex-start"
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
            <Logo src="/assets/images/logo512.png" />
          </InnerWrapper>
        </Wrapper>
      </MobilePadding>

      <Veggies src="/assets/images/vegies.png" />
    </Wrapper>
  );
};

const Veggies = styled.img`
  position: absolute;
  right: 0;
  z-index: 1;
  @media (max-width: 475px) {
    opacity: 0.3;
  }
`;

const MenuTitle = styled.h1`
  font-size: 124px;
  font-style: italic;
  width: 100%;
  text-align: left;
  margin-bottom: 0;
  @media (max-width: 475px) {
    margin: 0;
  }
`;

const MenuItemTitle = styled.h3`
  margin: 16px 0;
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

const MenuProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-right: 32px;
`;
const Logo = styled.img`margin: 150px 0;`;
