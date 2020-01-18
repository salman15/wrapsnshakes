import React from "react";
import { toCurrency } from "../../utils/calculations";
import {
  Wrapper,
  InnerWrapper,
  ContentBlock,
  MenuProduct,
  MenuList,
  MenuListItem
} from "..";
import copy from "../../data/copy.json";

export const FoodMenu = () => {
  return (
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
  );
};
