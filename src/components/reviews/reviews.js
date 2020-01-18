import React from "react";
import styled from "styled-components";
import { Wrapper, SpacerImage, ContentBlock, Slider } from "../";
import copy from "../../data/copy.json";

export const Reviews = () => {
  return (
    <Wrapper bgColor="transparent" width={"1149px"} height="70vh" id="reviews">
      <Wrapper
        bgColor="transparent"
        width={100}
        direction="row"
        spacing="space-between"
      >
        <Column width={45} height="initial">
          <IconContainer
            bgColor="transparent"
            width="100%"
            direction="row"
            spacing="space-around"
          >
            <CompanyIcon src={copy.pages.reviews.icons.google} />
            <CompanyIcon src={copy.pages.reviews.icons.foodora} />
          </IconContainer>
          <IconContainer
            bgColor="transparent"
            width="100%"
            direction="row"
            spacing="space-around"
          >
            <CompanyIcon src={copy.pages.reviews.icons.uber} />
            <CompanyIcon src={copy.pages.reviews.icons.thuisbezorgd} />
          </IconContainer>
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

export const Column = styled.div`
  display: flex;
  justify-content: ${props =>
    props.spacing ? props.spacing : " space-between"};

  align-items: center;
  width: ${props => (props.width ? props.width + "%" : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  text-align: ${props => (props.alignText ? props.alignText : "left")};
  z-index: ${props => (props.index ? props.index : "0")};
  position: relative;
  @media (max-width: 475px) {
    width: 100%;
    position: relative;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
`;

const CompanyIcon = styled.img`
  margin: 50px 0;
  @media (max-width: 475px) {
    margin: 25px 0;
    width: 100px;
  }
`;
