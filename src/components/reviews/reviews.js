import React from "react";
import styled from "styled-components";
import { Wrapper, Column, SpacerImage, ContentBlock, Slider } from "../";
import copy from "../../data/copy.json";

export const Reviews = () => {
  return (
    <Wrapper bgColor="transparent" width={"1149px"} height="70vh">
      <Wrapper
        bgColor="transparent"
        width={100}
        direction="row"
        spacing="space-between"
      >
        <Column width={45} height="initial">
          <Wrapper
            bgColor="transparent"
            width="100%"
            direction="row"
            spacing="space-around"
          >
            <CompanyIcon src={copy.pages.reviews.icons.google} />
            <CompanyIcon src={copy.pages.reviews.icons.foodora} />
          </Wrapper>
          <Wrapper
            bgColor="transparent"
            width="100%"
            direction="row"
            spacing="space-around"
          >
            <CompanyIcon src={copy.pages.reviews.icons.uber} />
            <CompanyIcon src={copy.pages.reviews.icons.thuisbezorgd} />
          </Wrapper>
        </Column>
        <Column width={50} spacing="center">
          <ContentBlock bgColor="#D8D8D8" color="#292929" spacing="center">
            <h2>
              {copy.pages.reviews.title}
            </h2>
            <SpacerImage src={copy.general.icons.spacer} />
            <Slider data={copy.pages.reviews.reviews} />
          </ContentBlock>
        </Column>
      </Wrapper>
    </Wrapper>
  );
};

const CompanyIcon = styled.img`margin: 50px 0;`;
